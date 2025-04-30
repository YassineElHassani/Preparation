const { employees } = require('../dataset');

//9. List all unique department names

function getUniqueDepartments(employees) {
    let departments = [];

    for(let i = 0; i < employees.length; i++) {
        if (!departments.includes(employees[i].department)) {
            departments.push(employees[i].department);
        }
    }

    console.log(departments);
}

getUniqueDepartments(employees);