export function dataExtract(url, cb) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.responseType = 'json';
    xhr.send();
    xhr.addEventListener('load', cb);
}