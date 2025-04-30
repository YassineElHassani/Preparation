const { employees } = require('../dataset');

//7. Find the employee with the highest salary

function getHighestPaidEmployee(employees) {
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

getHighestPaidEmployee(employees);