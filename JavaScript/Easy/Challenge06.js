const { employees } = require('../dataset');

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