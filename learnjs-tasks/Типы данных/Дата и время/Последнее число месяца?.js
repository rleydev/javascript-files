const getLastDayOfMonth = (year, month) => {
    var date = new Date(year, month + 1, 0);
    return date.getDate();
}

console.log(getLastDayOfMonth(2012, 1))
