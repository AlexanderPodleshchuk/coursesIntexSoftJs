var sum, n;
function getSumm(n) {
    sum = 0;
    if (n >= 0) {
        for (i = 0; i <= n; i++) {
            sum = sum + i;
        };
        console.log('Sum: '+ sum);
    } else {
        console.log('ERROR: Number no correct');
    }
}
getSumm(16);