const { employees } = require('../dataset');

//2. Get the last name of the last employee
function getLastEmployeeLastName() {
    let maxID = 1;
    for (let i = 0; i < employees.length; i++) {
        if (employees[i].id > maxID) {
            maxID = employees[i].id;
        }
    }

    employees.forEach(employer => {
        if (employer.id == maxID) {
            console.log(employer.lastName);
        }
    })
}

getLastEmployeeLastName();