const { employees } = require('./dataset');


//1. Get the first name of the first employee
function getFirstEmployeeFirstName() {
    for (let i = 0; i < employees.length; i++) {
        if (employees[i].id == 1) {
            console.log(employees[i].firstName);
        }
    }
}

getFirstEmployeeFirstName();
console.log('======================================');

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
console.log('======================================');

//3. Get the department of employee with ID 5
function getEmployeeDepartmentById() {
    for (let i = 0; i < employees.length; i++) {
        if (employees[i].id == 5) {
            console.log(employees[i].department);
        }
    }
}

getEmployeeDepartmentById();
console.log('======================================');

//4. Count how many employees are in the array
function countEmployees() {
    let count = 0;

    for (let i = 0; i < employees.length; i++) {
        count++
    }
    
    console.log('Employees number: ', count);
}

countEmployees();
console.log('======================================');

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
console.log('======================================');

//6. Calculate the average age of all employees