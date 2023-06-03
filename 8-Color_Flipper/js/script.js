
function changeColor() {
    let col = document.getElementById('colorInputText').value;
    document.body.style.background = col
    const k = new Option().style;
    k.color = col
    if (k.color == '') return alert("enter valid color")
}
