let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false


// solution:

const isEmpty = (obj) => {
    for (let key in obj) {
      return false;
    }
    return true;
  }