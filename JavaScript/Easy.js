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