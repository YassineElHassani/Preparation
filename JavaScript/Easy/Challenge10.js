const { employees } = require('../dataset');

//10. Check if any employee has no projects assigned

function hasEmployeesWithoutProjects() {
    for (let i = 0; i < employees.length; i++) {
        let project = employees[i].projects;
        if(project.length === 0) {
            console.log(employees[i].id, true);
        } else {
            console.log(employees[i].id, false);
        }
    }
}

hasEmployeesWithoutProjects();