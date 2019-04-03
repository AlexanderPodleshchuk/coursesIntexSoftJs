var m;
m = 123;
function getDayDeclension(m) {
    n = m % 100;
    if ((n < 10 || n > 20) && (n % 10 == 1)) {
        console.log('День');
    } else if ((n < 10 || n > 20) && ((n % 10 == 2) || (n % 10 == 3) || (n % 10 == 4))) {
        console.log('Дня');
    } else {
        console.log('Дней');
    }
}
m >= 0 ? getDayDeclension(m) : console.log('ERROR: Numder day no correct');