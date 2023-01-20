const inquirer = require('inquirer'); 
const generateSite = require('utils/generateSite.js');
const fs = require('fs');

const Manager = require('lib/Manager.js');
const Engineer = require('lib/Engineer.js');
const Intern = require('lib/Intern.js');

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
        name: 'officeNumber',
        message: 'What is their office number?'
    },
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
        name: 'officeNumber',
        message: 'What is their office number?'
    },
]