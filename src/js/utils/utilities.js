import axios from "axios";
import Velocity from 'velocity-animate';

export function getDocumentS3Request(host, credentials, body = {}) {
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


function removeAll() {
    const errors = document.getElementById("errorDiv");
    while (errors.firstChild) {
        errors.removeChild(errors.firstChild);
    }
}

export function clearMsg() {
    let vars = document.getElementsByClassName("errorMsg");
    Velocity(vars, {height: 0}, 500).then(() => {
        removeAll();
    });
}

export function showMsg() {
    let vars = document.getElementsByClassName("errorMsg");
    Velocity(vars, {height: 45}, 500);
}