var x1, y1, R;
function isPointInCircle(x, y) {
    x1 = 3;
    y1 = 5;
    R = 4;
    var X = x - x1;
    var Y = y - y1;
    if ((Math.pow(X, 2) + (Math.pow(Y, 2))) <= Math.pow(R, 2)) {
        return true;
    } else {
        return false;
    }
};
isPointInCircle(7, 5);

function isPointInRectangle(x, y) {
    var y1, y2, y3, y4;
    y1 = -3 / 5 * x + 3;
    y2 = 4 / 7 * x + 4;
    y3 = 2 / 5 * x - 2;
    y4 = -12 / 8 * x - 12;
    if (y <= y1 && y >= y3 && y <= y2 && y >= y4) {
        return true;
    } else {
        return false;
    }
};
isPointInRectangle(-7.5, 1);