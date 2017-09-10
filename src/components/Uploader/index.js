import React, { Component } from 'react';
import { getDocumentS3Request, buildS3RequestData } from '../../utils/DocumentUtils';

class Uploader extends Component {
    constructor(props) {
        super(props);
        this.onFileChange = this.onFileChange.bind(this);
        this.onUpload = this.onUpload.bind(this);
    }

    onFileChange(event) {
        const files = document.getElementById('picker').files;
        for (let file of files) {
            this.onUpload(file);
        }
    }

    onUpload(file) {
        const params = { filename: file.name, file_type: file.type };
        const request = getDocumentS3Request(this.props.host, this.props.apikey, params);

        // Retrieve pre-signed request through API Gateway and authorising lambda
        const signed_response = fetch(request).then((response) => {
            return response.json();
        });

        signed_response.then((data) => {
            // Make direct upload to S3 bucket using signed URL
            const request = buildS3RequestData(data.data, file);
            fetch(request).then((response) => {
                return response.json();
            });
        });
    }

    render() {
        return (
            <div>
                <input id="picker" type="file" className="uploader_input" onChange={this.onFileChange} />
                <label htmlFor="picker" className="uploader_button">Upload File</label>
                <div className="uploader_uploading">Uploading</div>
                <div className="uploader_success">Success</div>
                <div className="uploader_error">Error</div>
            </div>
        );
    }
}

export default Uploader;