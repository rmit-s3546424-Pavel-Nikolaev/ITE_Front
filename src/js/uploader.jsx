import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { getDocumentS3Request, buildS3RequestData, showMsg, clearMsg } from './utils/utilities';
import settings from './utils/config';

class Uploader extends Component {
    constructor(props) {
        super(props);
        this.credentials = localStorage.getItem('session');
        const isAuthenticated = this.credentials ? true : false;

        this.state = {
            uploading: false,
            success: false, 
            failure: false,
            isAuthenticated: isAuthenticated
        };

        this.onFileChange = this.onFileChange.bind(this);
        this.onUpload = this.onUpload.bind(this);
    }

    componentDidMount() {
        if(this.state.isAuthenticated) {
            let fGet = document.getElementById("fileGet");
            let file = document.getElementById("picker");

            fGet.onclick = () => {
                file.click();
                return false;
            };
        }
        else{
            const errors = document.getElementById("errorDiv");
            clearMsg();
             errors.insertAdjacentHTML("beforeend","<p class='errorMsg'>" + "Please login to upload files" + "</p>");
            showMsg();
        }
    }

    onFileChange(event) {
        this.setState({uploading: true, success: false, failure: false});
        if (event.target.value.length === 0) {
            this.setState({uploading: false, success: false, failure: false});
            return false;
        }

        let files = event.target.files;
        for (let file of files) {
            this.onUpload(file);
        }
    }

    onUpload(file) {
        const params = {filename: file.name, file_type: file.type};
        const request = getDocumentS3Request(settings.APIEndpoint, this.credentials, params);

        // Retrieve pre-signed request through API Gateway and authorising lambda
        const signed_response = request.then((response) => {
            return response.data;
        }).catch((error) => {
            this.setState({uploading: false, success: false, failure: true});
        });

        signed_response.then((data) => {
            // Make direct upload to S3 bucket using signed URL
            const request = buildS3RequestData(data.data, file);
            request.then((response) => {
                this.setState({uploading: false, success: true, failure: false});
            }).catch((error) => {
                this.setState({uploading: false, success: false, failure: true});
            });
        });
    }

    render() {   
        if (!this.state.isAuthenticated) {
            return <Redirect to="/login"/>;
        }

        let content = null;
        if (this.state.uploading) {
            document.getElementById("root").className = "blur";
            document.getElementById("loadingScreen").style.visibility = "visible";
        }
        else {
            document.getElementById("root").className = "";
            document.getElementById("loadingScreen").style.visibility = "hidden";
        }

        if (this.state.success) {
            content = (<div id="loadDiv"><h3>Success!</h3></div>);
        }
        else if (this.state.failure) {
            content = (<div id="loadDiv"><h3>Failure!</h3></div>);
        }
        else {
            content = (
                <div id="loadDiv">
                    <a className="uploader_button" id="fileGet">Select file</a>
                    <input type="file" className="uploader_input" id="picker" onChange={this.onFileChange}/>
                </div>
            );
        }
        return (content);
    }
}

export default Uploader;