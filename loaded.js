
export function toLoad(url, infor) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url)
    xhr.onload = () => {
        infor.innerHTML = xhr.responseText;
    }
    xhr.send()
}




