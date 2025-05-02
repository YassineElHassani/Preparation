const { employees } = require('../dataset');

//14. Find employees whose last name starts with 'L'

function getEmployeesByLastNameInitial(employees) {
    let arr = [];

    for (let i = 0; i < employees.length; i++) {
        let employeesLastName = employees[i].lastName;

        if(employeesLastName[0] === "L") {
            arr.push(employees[i]);
        }
    }

    console.log(arr);
}

getEmployeesByLastNameInitial(employees);