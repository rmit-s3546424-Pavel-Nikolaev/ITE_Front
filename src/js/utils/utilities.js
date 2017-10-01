import axios from "axios";
import Velocity from 'velocity-animate';


function progress(event, message) {
    let percentCompleted = Math.floor((event.loaded * 100) / event.total);
    let progBar = document.getElementById("totalProg");
    document.getElementById("loadingMessage").innerText = message + " :" + percentCompleted + "%";
    Velocity(progBar, {width: percentCompleted + "%"}, 200);
}

export function getDocumentS3Request(host, credentials, body = {}) {
    const params = {
        method: 'post',
        url: `${host}/upload`,
        headers: {'Authorization': credentials},
        data: JSON.stringify(body),
        onUploadProgress: progressEvent => {
            progress(progressEvent, "Processing file");
        },
        onDownloadProgress: progressEvent => {
            progress(progressEvent, "Uploading file file");
        }
    };
    return new axios.request(params);
}
export function buildS3RequestData(path, file) {
    const params = {
        method: 'put',
        url: path,
        headers: {'Content-Type': 'binary/octet-stream'},
        data: file,
        onUploadProgress: progressEvent => {
            progress(progressEvent, "Saving file");
        },
    };
    return new axios.request(params);
}

function removeAll() {
    const errors = document.getElementById("errorDiv");
    const msgs = document.getElementById("zuccDiv");

    while (errors.firstChild) {
        errors.removeChild(errors.firstChild);
    }
    while (msgs.firstChild) {
        msgs.removeChild(msgs.firstChild);
    }
}

function remove(vars) {
    const errors = document.getElementById("errorDiv");
    vars.forEach((element) => {
        errors.removeChild(element);
    });
}

export function clearMsg(error = true, all = true) {
    let vars = error ? document.querySelectorAll(".errorMsg") : document.querySelectorAll(".succMsg");
    Velocity(vars, {height: 0}, 500).then(() => {
        all ? removeAll(): remove(vars);
    });
}

export function showMsg(error = true) {
    let vars = error ? document.querySelectorAll(".errorMsg") : document.querySelectorAll(".succMsg");
    Velocity(vars, {height: 45}, 500);
}