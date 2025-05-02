const { employees } = require('../dataset');

//16. Find employees who joined after 2020

function getEmployeesJoinedAfterYear(employees) {
    let arr = [];
    const date = new Date("2021"); 

    employees.forEach(employer => {
        let joinDate = new Date(employer.joinDate);
        if(joinDate >= date) {
            arr.push(employer);
        }
    });

    console.log(arr);
}

getEmployeesJoinedAfterYear(employees);