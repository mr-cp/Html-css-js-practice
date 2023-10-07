let num = prompt("enter a number");
let temp = num;
let sum = 0, rev = 0, r;

while (temp != 0) {
    r = parseInt(temp % 10);
    sum = parseInt(sum + (r * r * r));
    temp = parseInt(temp / 10);
}
if (num == sum) {
    document.write("Amstrong");
} else {
    document.write("Not Amstrong");
}