const inquirer = require('inquirer'); 
// const generateSite = require('utils/generateSite.js');
const fs = require('fs');

// const Manager = require('lib/Manager.js');
// const Engineer = require('lib/Engineer.js');
// const Intern = require('lib/Intern.js');

const newEmp = [
    {
        type: 'confirm',
        name: 'newEmp',
        message: 'Is this person a new employee?',
    }
]
const empType= [
    {
        type: 'list',
        name: 'empType',
        message: 'What type of employee is this?',
        choices: ['Manager', 'Engineer', 'Intern']
    }
]

const addManager = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the manager?'
    },
    {
        type: 'input',
        name: 'employeeID',
        message: 'What is their employee ID number?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is their email address?'
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is their office number?'
    },
]

const addEngineer = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the engineer?'
    },
    {
        type: 'input',
        name: 'employeeID',
        message: 'What is their employee ID number?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is their email address?'
    },
    {
        type: 'input', 
        name: 'github',
        message: 'What is their GitHub username?'
    }
]

const addIntern = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the intern?'
    },
    {
        type: 'input',
        name: 'employeeID',
        message: 'What is their employee ID number?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is their email address?'
    },
    {
        type: 'input', 
        name: 'school',
        message: 'Where do they go to school?'
    }
]

function init() {
    inquirer.prompt(newEmp).then((answers) => {
        if (answers.newEmp == 'No'){
            console.log('This is only for NEW employees')
        }})}


        // else (function empType) {
        // if (answers.empType === 'Manager') {
        //     function initManager() {
        //         inquirer.prompt(addManager)
        // } initManager(); 




//         } else if (answers.empType === 'Engineer'){
//             function initEngineer() {
//                 inquirer.prompt(addEngineer)
//         } initEngineer();



//     } else {
//         (function initIntern() {
//             inquirer.prompt(addIntern)})
//             initIntern();



//         }
//     });
// }

init();