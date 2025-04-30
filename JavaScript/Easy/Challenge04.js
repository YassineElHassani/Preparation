const { employees } = require('../dataset');

//4. Count how many employees are in the array
function countEmployees() {
    let count = 0;

    for (let i = 0; i < employees.length; i++) {
        count++
    }

    console.log('Employees number: ', count);
}

countEmployees();