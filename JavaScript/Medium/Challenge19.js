const { employees } = require('../dataset');

//19. List employees with a salary above 60000

function getHighEarningEmployees(employees) {
    let employeesList = [];

    for (let i = 0; i < employees.length; i++) {
        if(employees[i].salary > 60000) {
            employeesList.push(employees[i]);
        }
    }

    console.log(employeesList);
}

getHighEarningEmployees(employees);