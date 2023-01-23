//Dependencies
const inquirer = require('inquirer'); 
const generateSite = require('utils/generateSite.js');
const fs = require('fs');

//Employee libraries
const Manager = require('lib/Manager.js');
const Engineer = require('lib/Engineer.js');
const Intern = require('lib/Intern.js');

//prompts to add data to libraries
const addEmp = [
    {
        type: 'list',
        name: 'role',
        message: 'To add an employee, choose a role listed below:',
        choices: ['Intern', 'Engineer', 'No additional team members']
    },
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
    // for Engineers only
    {
        type: 'input',
        name: 'github',
        message: "Please enter the employee's GitHub username."
    },
    // for Interns only
    {
        type: 'input',
        name: 'school',
        message: 'Please enter the name of the school the intern attends'
    },
    //finish or continue
    {
        type: 'confirm',
        name: 'AnotherEmp',
        message: 'Would you like to add another employee?'
    }
]


function init() {};
init();