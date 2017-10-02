import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {getDocumentS3Request, buildS3RequestData, showMsg, clearMsg} from './utils/utilities';
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
        this.listen = this.listen.bind(this);
        document.getElementById("totalProg").style.visibility = "inherit";
        document.getElementById("loadingMessage").style.visibility = "inherit";
    }

    componentDidMount() {
        clearMsg();
        this.listen();
        if (this.state.isAuthenticated) {
            let fGet = document.getElementById("fileGet");
            let file = document.getElementById("picker");

            fGet.onclick = () => {
                file.click();
                return false;
            };
        }
        else {
            const errors = document.getElementById("errorDiv");
            clearMsg();
            errors.insertAdjacentHTML("beforeend", "<p class='errorMsg'>Please login to upload files</p>");
            showMsg();
        }
    }

    // will automatically take user to login if
    // sessions is expired/deleted
    listen() {
        this.interval = setInterval(() => {
            let token = localStorage.getItem('session');
            if (token == null) {
                const errors = document.getElementById("errorDiv");
                clearMsg();
                errors.insertAdjacentHTML("beforeend", "<p class='errorMsg'>Please login to upload files</p>");
                showMsg();
                this.setState({
                    isAuthenticated: false
                });
                clearInterval(this.interval);
            }
            else {
                this.setState({
                    isAuthenticated: true
                });
            }
        }, 50);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    onFileChange(event) {
        this.setState({uploading: true});
        if (event.target.value.length === 0) {
            this.setState({uploading: false});
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
            if (response.status === 200) {
                return response.data;
            }
            else {
                return Promise.resolve(null);
            }
        }).catch((error) => {
            this.setState({uploading: false});
            return Promise.resolve(null);
        });


        signed_response.then((data) => {
            if(data === null){
                const errors = document.getElementById("errorDiv");
                clearMsg();
                errors.insertAdjacentHTML("beforeend", "<p class='errorMsg'>Failure while uploading</p>");
                showMsg();
                return;
            }
            // Make direct upload to S3 bucket using signed URL
            const request = buildS3RequestData(data.data, file);
            request.then((response) => {
                this.setState({uploading: false});
                const msg = document.getElementById("zuccDiv");
                clearMsg(false, true);
                msg.insertAdjacentHTML("beforeend", "<p class='succMsg'>Success!</p>");
                showMsg(false);
            }).catch((error) => {
                this.setState({uploading: false});
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
            document.getElementById('loader').className = "loader";
            document.getElementById("loadingScreen").style.visibility = "visible";
        }
        else {
            document.getElementById("root").className = "";
            document.getElementById('loader').className = "";
            document.getElementById("loadingScreen").style.visibility = "hidden";
        }

        content = (
            <div id="loadDiv">
                <a className="uploader_button" id="fileGet">Select file</a>
                <input type="file" className="uploader_input" id="picker" onChange={this.onFileChange}/>
            </div>
        );

        return (content);
    }
}

export default Uploader;