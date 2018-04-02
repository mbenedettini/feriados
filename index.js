'use strict';

const moment = require('moment');

const holidays = {
    2017: require('./2017.json'),
    2018: require('./2018.json'),
    2019: require('./2019.json')
};

function isBusiness(date) {
    let mDate = moment(date);
    if (mDate.day() == 0 || mDate.day() == 6) {
        // Sunday or Saturday
        return false;
    }

    let currYearHolidays = holidays[mDate.year()];
    if (currYearHolidays && currYearHolidays[mDate.month()][mDate.date()]) {
        return false;
    }

    return true;
}

function getNextBusiness(date) {
    let mDate = moment(date);
    if (isBusiness(mDate)) {
        return mDate.toDate();
    }
    let nextDate = mDate.clone();
    while (!isBusiness(nextDate)) {
        nextDate.add(1, 'days');
    }
    return nextDate.toDate();
}

module.exports = {
    isBusiness: isBusiness,
    getNextBusiness: getNextBusiness
};

if (require.main == module) {
    const moment = require('moment');
    console.log(process.argv[2]);
    let date = moment(process.argv[2]);
    console.log(`isBusiness: ${isBusiness(date)}`);
    console.log(`getNextBusiness: ${getNextBusiness(date)}`);
}
