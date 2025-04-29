const { employees } = require('./dataset');


//1. Get the first name of the first employee

for(let i = 0; i < employees.length; i++) {
    if(employees[i].id == 1) {
        console.log(employees[i].firstName);
    }
}

console.log('======================================');

//2. Get the last name of the last employee
let maxID = 1;
for(let i = 0; i < employees.length; i++) {
    if(employees[i].id > maxID) {
        maxID = employees[i].id;
    }
}

employees.forEach(employer => {
    if(employer.id  == maxID) {
        console.log(employer.lastName);
    }
})

console.log('======================================');

//3. Get the department of employee with ID 5

for(let i = 0; i < employees.length; i++) {
    if(employees[i].id == 5) {
        console.log(employees[i].department);
    }
}

console.log('======================================');

//4. Count how many employees are in the array

let count = 0;

for(let i = 0; i < employees.length; i++) {
    count++
}

console.log('Employees number: ', count);
console.log('======================================');

//5. Check if any employee is inactive (isActive: false)

for(let i = 0; i < employees.length; i++) {
    if(employees[i].isActive == false) {
        console.log(employees[i].firstName);
    }
}

console.log('======================================');

//6. Calculate the average age of all employees