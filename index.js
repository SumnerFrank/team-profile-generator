const inquirer = require('inquirer'); 
const generateSite = require('utils/generateSite.js');
const fs = require('fs');

const addManager = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    },
    {
        type: 'input',
        name: 'employeeID',
        message: 'What is your employee ID number?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is your office number?'
    },
]