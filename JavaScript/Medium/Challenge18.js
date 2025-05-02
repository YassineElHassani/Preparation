const { employees } = require('../dataset');

//18. Find the most common skill among all employees

function getMostCommonSkill(employees) {
    const skillCount = {};
    let commonSkill = "";
    let count = 0;

    for(let i = 0; i < employees.length; i++) {
        const employeesSkills = employees[i].skills;

        for(let j = 0; j < employeesSkills.length; j++) {
            const skill = employeesSkills[j];

            if(!skillCount[skill]) {
                skillCount[skill] = 1;
            } else {
                skillCount[skill]++;
            }

            if(skillCount[skill] > count) {
                count = skillCount[skill];
                commonSkill = skill;
            }
        }

        // console.log(employeesSkills);
    }

    console.log(commonSkill);
}

getMostCommonSkill(employees);