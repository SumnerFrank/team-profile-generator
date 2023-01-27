//Dependencies
const inquirer = require('inquirer'); 
const writeFile = require('./utils/generateSite.js');
const fs = require('fs');

//Employee libraries
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const { addListener } = require('process');
const generateHtml = require('./src/generateSite.js');

//empty employee Array
const empArray = [];

//prompts to add data to libraries

//Manager prompts 
const addTeamManager = managerInfo => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Who is the manager?'
            // validate: 
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter the manager email address.'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter the manager ID number.'
        },
        {
            type: 'input',
            name: 'officeNum',
            message: 'Enter the manager office number.'
        },
        {
            type: 'confirm',
            name: 'AnotherEmp',
            message: 'Would you like to add an employee?'
        }
    ])
    //pushes manager info to employee array
    .then(managerInfo => {
        const manager = new Manager 
        (managerInfo.name, managerInfo.id, managerInfo.email, managerInfo.officeNum);
        empArray.push(manager); 
        console.log(empArray);
        // console.log(managerInfo.AnotherEmp)
        if (managerInfo.AnotherEmp) {
            addEmp();
        } else {
            // generateHtml(managerInfo);
            console.log('managerInfo fun', empArray)
        }
    })
};

//non-Manager employee prompts 
const addEmp = teamInfo => {
    return inquirer.prompt([
    {
        type: 'list',
        name: 'role',
        message: 'To add an employee, choose a role listed below:',
        choices: ['Intern', 'Engineer', 'No additional team members']
    }
]).then(teamInfo =>{
    if (teamInfo.role == 'Intern') { 
        addIntern();
    } else if (teamInfo.role == 'Engineer') {
        addEngin();
    } if (teamInfo.role == 'No additional team members') {
        // generateHtml(teamInfo);
        console.log('teamInfo fun', empArray)
    } 
})
};

//main application initiation function
const init = () => {
    addTeamManager();

};

const addIntern = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the employee's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter the ID number of the employee.'
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the employee's email address."
        }, 
        {
            type: 'input',
            name: 'school',
            message: 'Please enter the name of the school the intern attends'
        },
        {
            type: 'confirm',
            name: 'AnotherEmp',
            message: 'Would you like to add another employee?'
        }
    ]).then((teamInfo) => {
        const intern = new Intern
        (teamInfo.name, teamInfo.id, teamInfo.email, teamInfo.school);
        empArray.push(intern);
        if (teamInfo.AnotherEmp) {
            addEmp();
        } else {
            // generateHtml(teamInfo);
            console.log('intern func', empArray)
        }
    })
}

const addEngin = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the employee's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter the ID number of the employee.'
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the employee's email address."
        }, 
        {
            type: 'input',
            name: 'github',
            message: "Please enter the employee's GitHub username."
        },
        {
            type: 'confirm',
            name: 'AnotherEmp',
            message: 'Would you like to add another employee?'
        }
    ]).then((teamInfo) => {
        const engineer = new Engineer
        (teamInfo.name, teamInfo.id, teamInfo.email, teamInfo.github);
        empArray.push(engineer);
        if (teamInfo.AnotherEmp) {
            addEmp();
        } else {
            // generateHtml(teamInfo);
            console.log('engineer func', empArray)
            //generateHtml(empArray);
        }
    })
}


//initiates application
init();