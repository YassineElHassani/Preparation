const { employees } = require('../dataset');

//8. Count how many employees are in the "Développement" department

function countEmployeesInDepartment(employees) {
    let count = 0;

    for(let i = 0; i < employees.length; i++) {
        if(employees[i].department == "Développement") {
            count++;
        }
    }

    console.log(count);
}

countEmployeesInDepartment(employees);