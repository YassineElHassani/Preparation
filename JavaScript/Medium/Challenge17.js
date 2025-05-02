const { employees } = require('../dataset');

//17. List employees who speak more than 2 languages

function getMultilingualEmployees(employees) {
    let arr = [];

    employees.forEach(employer => {
        let lang = employer.languages;

        if(lang.length > 2) {
            arr.push(employer);
        }
    });

    console.log(arr);
}

getMultilingualEmployees(employees);