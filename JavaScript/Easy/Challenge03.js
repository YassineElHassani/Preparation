const { employees } = require('../dataset');

//3. Get the department of employee with ID 5

function getEmployeeDepartmentById(employees) {
    for (let i = 0; i < employees.length; i++) {
        if (employees[i].id == 5) {
            console.log(employees[i].department);
        }
    }
}

getEmployeeDepartmentById(employees);