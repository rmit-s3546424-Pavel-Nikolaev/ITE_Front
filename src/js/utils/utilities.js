export function getDocumentS3Request(host, api_key, body={}) {
    const headers = new Headers();
    headers.append("X-Api-Key", api_key);
    const params = { 
        method: 'POST',
        headers: headers,
        body: JSON.stringify(body)
    };

    return new Request(`${host}/upload`, params);
}

export function buildS3RequestData(path, file) {
    const headers = new Headers();
    headers.append('Content-Type', 'binary/octet-stream');

    const params = {
        method: 'PUT',
        headers: headers,
        body: file
    };

    return new Request(path, params);
}
