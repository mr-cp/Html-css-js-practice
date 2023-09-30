var fact = 1;
var a = prompt("Enter a number")
document.write("Entered number is " + a)

for (i = 1; i <= a; i++) {
    fact *= i;
}

document.write("<br>Factorial of " + a + " is " + fact)