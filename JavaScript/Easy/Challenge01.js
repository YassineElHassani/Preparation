const { employees } = require('../dataset');


//1. Get the first name of the first employee
function getFirstEmployeeFirstName() {
    for (let i = 0; i < employees.length; i++) {
        if (employees[i].id == 1) {
            console.log(employees[i].firstName);
        }
    }
}

getFirstEmployeeFirstName();