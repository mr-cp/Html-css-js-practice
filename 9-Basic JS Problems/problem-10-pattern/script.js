let n = prompt('Enter a number:')
document.write('Entered number is: ' + n + '<br>')

for (i = 1; i <= n; i++) {
    for (j = i; j < n; j++) {
        document.write(' &nbsp ');
    }
    for (k = 1; k <= i; k++) {
        document.write(' * ')
    }
    document.write('<br>')
}