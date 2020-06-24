const getCurrentDate = (separator = '') => {

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return `${year}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${date}`
}

const getTomorrowDate = (separator = '') => {

    let newDate = new Date()
    let date = newDate.getDate() + 1;
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return `${year}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${date}`
}

const get2DayAfterDate = (separator = '') => {

    let newDate = new Date()
    let date = newDate.getDate() + 2;
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return `${year}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${date}`
}

module.exports = { getCurrentDate, getTomorrowDate, get2DayAfterDate };