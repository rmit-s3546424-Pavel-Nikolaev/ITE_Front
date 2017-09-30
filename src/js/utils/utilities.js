import axios from "axios";

export function getDocumentS3Request(host, credentials, body={}) {
    const params = { 
        method: 'post',
        url: `${host}/upload`,
        headers: {'Authorization': credentials},
        data: JSON.stringify(body)
    };

    return new axios.request(params);
}

export function buildS3RequestData(path, file) {
    const params = {
        method: 'put',
        url: path,
        headers: {'Content-Type': 'binary/octet-stream'},
        data: file
    };

    return new axios.request(params);
}