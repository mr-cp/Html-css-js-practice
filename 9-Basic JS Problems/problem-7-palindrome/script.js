let n = prompt("enter number");
document.write("entered number is: "+ n)
let temp = n;
let rev = 0, r;

while (temp != 0) {
    r = parseInt (temp % 10);
    rev = parseInt (rev * 10 + r);
    temp = parseInt (temp / 10);
}

if (n == rev) {
    document.write("<br>palindrome")
} else {
    document.write("not palindrome")
}


