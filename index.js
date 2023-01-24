//Dependencies
const inquirer = require('inquirer'); 
const writeFile = require('./utils/generateSite.js');
const fs = require('fs');

//Employee libraries
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

//employee Array
const empArray = [''];

//prompts to add data to libraries

//Manager prompts 
const addTeamManager = managerInfo => {
    return inquirer.prompt([
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
            message: 'Would you like to add another employee?'
        }
    ])
    //pushes manager info to employee array
    .then(managerInfo => {
        const manager = new Manager 
        (managerInfo.name, managerInfo.email, managerInfo.id, managerInfo.officeNum);
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
]).then(teamInfo =>{
    //need function to pull team info
})
};

//main application initiation function
function init() {
    inquirer.prompt(addTeamManager).then((answers) => {
        fs.writeFile('index.html', generateSite(answers),
        (err) => err ? console.log(err) : console.log('successfuly created index.html')
        );
    })
};


//initiates application
init();