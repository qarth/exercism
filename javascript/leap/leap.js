/**
 * Created by root on 25/11/2016.
 */
var Year;
Year = function (year) {
    this.year = year;
};

Year.prototype.isLeap = function() {
    var year = this.year;
    if (year % 400 === 0) {
        return true;
    } else if (year % 100 === 0) {
        return false;
    } else return year % 4 === 0;
};

module.exports = Year;