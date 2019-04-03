var allMinutes, days;
function addMinutes(hours, minutes, minutesAdd) {
    if (hours < 24 && hours >= 0 && minutes < 60 && minutes >= 0) {
        allMinutes = hours * 60 + minutes + minutesAdd;
        days = Math.floor(allMinutes / 1440);
        allMinutes = allMinutes - (days * 24 * 60);
        hours = Math.floor(allMinutes / 60);
        minutes = allMinutes % 60;
        console.log('Days:' + days + ' ' + 'times: ' + hours + ':' + minutes);

    } else {
        console.log('ERROR: Time no valid');
    };
}
addMinutes(10, 11, 2001);