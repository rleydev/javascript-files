let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

const topSalary = (salaries)=> {
    let max = 0;
    let maxSalEmpl
    for(const [name, salary] of Object.entries(salaries)) {
        if (max < salary) {
            max = salary
            maxSalEmpl = name
        }
    }
    return maxSalEmpl
}

alert('the max salary receives' + topSalary(salaries))