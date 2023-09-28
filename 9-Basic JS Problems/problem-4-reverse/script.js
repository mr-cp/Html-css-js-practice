let rev = 0, r;

let a = prompt("enter any value");
document.write("Entered no. = " + a)

while (a != 0) {
    r = parseInt(a % 10);
    rev = parseInt(rev * 10 + r);
    a = parseInt(a / 10);
}
// console.log(rev)
document.write("<br>Reverse of the entered number is: ", + rev)


