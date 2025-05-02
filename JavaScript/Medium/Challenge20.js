const { employees } = require('../dataset');

//20. Find the longest-serving employee

function getLongestServingEmployee(employees) {
    let date = new Date("2050-01-01");
    let longestServing = null;

    for(let i = 0; i < employees.length; i++) {
        let joinDate = new Date(employees[i].joinDate);

        if(joinDate < date) {
            date = joinDate;
            longestServing = employees[i];
        }
    }

    console.log(longestServing);
}

getLongestServingEmployee(employees);