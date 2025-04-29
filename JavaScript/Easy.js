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
function calculateAverageAge() {
    let sumAges = 0;
    let count = 0;

    for (let i = 0; i < employees.length; i++) {
        count++;
        sumAges += employees[i].age;
    }
    
    console.log('Average Age: ', (sumAges / count));
}

calculateAverageAge();
console.log('======================================');

//7. Find the employee with the highest salary
function getHighestPaidEmployee() {
    let maxSalary = 0;

    for(let i = 0; i < employees.length; i++) {
        if(employees[i].salary > maxSalary) {
            maxSalary = employees[i].salary;
        }
    }
    
    employees.forEach(employer => {
        if(maxSalary == employer.salary) {
            console.log(employer);
        }
    });
}

getHighestPaidEmployee();
console.log('======================================');

//8. Count how many employees are in the "Développement" department
function countEmployeesInDepartment() {
    let count = 0;

    for(let i = 0; i < employees.length; i++) {
        if(employees[i].department == "Développement") {
            count++;
        }
    }

    console.log(count);
}

countEmployeesInDepartment();
console.log('======================================');

//9. List all unique department names
function getUniqueDepartments() {
    let departments = [];

    for(let i = 0; i < employees.length; i++) {
        if (!departments.includes(employees[i].department)) {
            departments.push(employees[i].department);
        }
    }

    console.log(departments);
}

getUniqueDepartments();