let a = prompt("Enter 1st number")
let b = prompt("Enter 2nd number")
let c = prompt("Enter 3rd number")

document.write("Entered numbers are: " + a + ", " + b + ", " + c + '.')

if (a > b && a > c) {
    document.write('<br>' + a + ' is greater.')
} else if (b > c && c > a) {
    document.write('<br>' + b + ' is greater.')
} else {
    document.write('<br>' + c + ' is greater.')
}