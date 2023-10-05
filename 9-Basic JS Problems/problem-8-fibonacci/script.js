let n1 = 0, n2 = 1, i, n3;
let n = prompt("Enter a number");
document.write("Entered no is: " + n)
document.write("<br>Fibonacci numbers are: <br>" + n1 + "<br>" + n2)

for (i = 2; i < n; i++) {
    n3 = n1 + n2;
    document.write("<br>" + n3)
    n1 = n2;
    n2 = n3;
}