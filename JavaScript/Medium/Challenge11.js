const { employees } = require('../dataset');

//11. Count how many employees speak English

function countEnglishSpeakingEmployees(employees) {
    let count = 0;

    for (let i = 0; i < employees.length; i++) {
        let employeesLanguges = employees[i].languages;
        if(employeesLanguges.includes("English")) {
            count++;
        }
    }
    
    console.log(count);
}

countEnglishSpeakingEmployees(employees);