import axios from "axios";
import Velocity from 'velocity-animate';


function progress(event, message){
     let percentCompleted = Math.floor((event.loaded * 100) / event.total);
     let progBar = document.getElementById("totalProg");
     document.getElementById("loadingMessage").innerText = message +" :"+percentCompleted+"%";
     Velocity(progBar, {width: percentCompleted+"%"}, 200);
}

export function getDocumentS3Request(host, credentials, body = {}) {
    const params = {
        method: 'post',
        url: `${host}/upload`,
        headers: {'Authorization': credentials},
        data: JSON.stringify(body),
        onUploadProgress: progressEvent => { progress(progressEvent, "Processing file");},
        onDownloadProgress : progressEvent => { progress(progressEvent, "Uploading file file");}
    };
    return new axios.request(params);
}
export function buildS3RequestData(path, file) {
    const params = {
        method: 'put',
        url: path,
        headers: {'Content-Type': 'binary/octet-stream'},
        data: file,
        onUploadProgress: progressEvent => { progress(progressEvent, "Saving file");},
    };
    return new axios.request(params);
}


function removeAll(vars) {
    const errors = document.getElementById("errorDiv");
    vars.forEach((element) => {
       errors.removeChild(element);
    });
}

export function clearMsg() {
    let vars = document.querySelectorAll(".errorMsg");
    Velocity(vars, {height: 0}, 500).then(() => {
        removeAll(vars);
    });
}

export function showMsg() {
    let vars = document.querySelectorAll(".errorMsg");
    Velocity(vars, {height: 45}, 500);
}