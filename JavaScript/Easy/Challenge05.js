const { employees } = require('../dataset');

//5. Check if any employee is inactive (isActive: false)
function hasInactiveEmployees() {
    for (let i = 0; i < employees.length; i++) {
        if (employees[i].isActive == false) {
            console.log(employees[i].id, true);
        } else {
            console.log(employees[i].id, false);
        }
    }
}

hasInactiveEmployees();