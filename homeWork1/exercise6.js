var n;
n = 14;
function getMultiplicationTable(n) {
    for (i = 1; i <= 10; i++) {
        console.log(n + ' * ' + i + ' = ' + (n * i));
    };
}
n >= 0 ? getMultiplicationTable(n) : console.log('ERROR: Number no correct');