var allMinutes, days;
function addMinutes(hours, minutes, minutesAdd) {
    if (hours < 24 && hours >= 0 && minutes < 60 && minutes >= 0) {
        allMinutes = hours * 60 + minutes + minutesAdd;
        days = Math.floor(allMinutes / 1440);
        allMinutes = allMinutes - (days * 24 * 60);
        hours = Math.floor(allMinutes / 60);
        minutes = allMinutes % 60;
        if (hours < 10 && minutes < 10) {
            return 'Days:' + days + ' ' + 'times: 0' + hours + ':0' + minutes;
        } else if (hours < 10 && minutes >= 10) {
            return 'Days:' + days + ' ' + 'times: 0' + hours + ':' + minutes;
        } if (hours >= 10 && minutes < 10) {
            return 'Days:' + days + ' ' + 'times: ' + hours + ':0' + minutes;
        } else {
            return 'Days:' + days + ' ' + 'times: ' + hours + ':' + minutes;
        }
    } else {
        return 'ERROR: Time no valid';
    };
}
addMinutes(10, 11, 2001);