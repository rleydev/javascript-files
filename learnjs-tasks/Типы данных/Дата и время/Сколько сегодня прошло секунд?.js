
// getSecondsToday() == 36000 // (3600 * 10)
const getSecondsToday = () => {
    let date = new Date();
    return date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
}

console.log(getSecondsToday())


