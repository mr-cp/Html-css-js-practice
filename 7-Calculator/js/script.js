let input = document.querySelector('#input')
let output = document.querySelector('#output')

function display(num) {
    input.innerText += num
    // console.log(num)
}

function clearAll() {
    input.innerText = ""
    output.innerText = ""
}

function backspace() {
    let a = input.innerText
    input.innerText = a.slice(0, -1)
}

function equal() {
    let j = input.innerText
    j = j.replace('x', '*')
    j = j.replace('÷', '/')
    output.innerText = eval(j)
}

function percentage() {
    let x = input.innerText
    x = x.split('x')
    y = x[0]
    z = x[1] / 100
    x = z * y
    output.innerText += x
}

// for enter function
// function disp() {
//     input.innerHTML +='<br>'
// }
