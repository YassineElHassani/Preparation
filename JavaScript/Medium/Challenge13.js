const { employees } = require('../dataset');

//13. List employees who have more than 2 skills

function getEmployeesWithMoreThanTwoSkills(employees) {
    let arr = [];

    for (let i = 0; i < employees.length; i++) {
        let employeesSkills = employees[i].skills; 
        
        if(employeesSkills.length > 2) {
            arr.push(employees[i]);
        }
    }

    console.log(arr);
}

getEmployeesWithMoreThanTwoSkills(employees);