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
        type: 'confirm',
        name: 'newEmp',
        message: 'Is this person a new employee?',
    }
]


function init() {};
init();