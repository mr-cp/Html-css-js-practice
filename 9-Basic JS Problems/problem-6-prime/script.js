var count = 0;
var n = prompt("Enter a number");
document.write("Entered number is: " + n);

for (i = 1; i <= n; i++) {
    if (n % i == 0) {
        count = count + 1
    }
}

if (count == 2) {
    document.write("<br>no. is prime")
} else {
    document.write("<br>no. is not prime")
}
