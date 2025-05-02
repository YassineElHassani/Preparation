const { employees } = require('../dataset');

//15. Calculate the average salary per department

function calculateAverageSalaryByDepartment(employees) {
    let departments = [];
    let departmentTotalSalary = {};
    let departmentCounts = {};
    let result = [];

    for(let i = 0; i < employees.length; i++) {
        let dep = employees[i].department;
        if (!departments.includes(dep)) {
            departments.push(dep);
            departmentTotalSalary[dep] = 0;
            departmentCounts[dep] = 0;
        }
    }

    for (let i = 0; i < employees.length; i++) {
        let dep = employees[i].department;
        departmentTotalSalary[dep] += employees[i].salary;
        departmentCounts[dep] += 1;
    }

    for (let i = 0; i < departments.length; i++) {
        let dep = departments[i];
        let average = departmentTotalSalary[dep] / departmentCounts[dep];

        result.push(dep, average);
    }
    
    console.log(result);
}

calculateAverageSalaryByDepartment(employees);
