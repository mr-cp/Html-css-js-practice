
let dis = document.querySelector('#display');

function show(values) {
    dis.innerText += values;
}

function backspace() {
    let a = dis.innerText
    dis.innerText= a.slice(0,-1)
}

function reset() {
    dis.innerText = ""
}

function space(){
    dis.innerHTML += "&nbsp;"
}

function enter(){
    dis.innerHTML += "<br>"
}
