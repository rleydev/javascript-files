const getSecondsToTomorrow = () => {
    var now = new Date();
    var tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1)
    var diff = tomorrow - now
    return Math.round(diff / 1000)
}

console.log(getSecondsToTomorrow())