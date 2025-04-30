const { employees } = require('../dataset');

//12. Find all employees who work on "Project Gamma"

function getEmployeesByProject(employees) {
    let arr = [];

    for (let i = 0; i < employees.length; i++) {
        if(employees[i].projects.includes("Project Gamma")) {
            arr.push(employees[i]);
        }
    }
    
    console.log(arr);
}

getEmployeesByProject(employees);