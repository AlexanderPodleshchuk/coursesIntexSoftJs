var m;
m = 123;
function getDayDeclension(m) {
    var n = m % 100;
    if ((n < 10 || n > 20) && (n % 10 == 1)) {
        return 'День';
    } else if ((n < 10 || n > 20) && ((n % 10 == 2) || (n % 10 == 3) || (n % 10 == 4))) {
        return 'Дня';
    } else {
        return'Дней';
    }
}
m >= 0 ? getDayDeclension(m) : console.log('ERROR: Number day no correct');