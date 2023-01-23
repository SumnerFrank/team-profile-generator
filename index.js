const inquirer = require('inquirer'); 
const generateSite = require('utils/generateSite.js');
const fs = require('fs');

const Manager = require('lib/Manager.js');
const Engineer = require('lib/Engineer.js');
const Intern = require('lib/Intern.js');

const addEmp = [
    {
        type: 'confirm',
        name: 'newEmp',
        message: 'Is this person a new employee?',
    }
]


function init() {};
init();