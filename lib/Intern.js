// calling employee info from Employee.js
const Employee = require('lib/Employee.js');

class Intern extends Employee {
    constructor(name, id, email) {
        super(name, id, email);
    };

    //Overrides 'Employee' as default
    getRole() {
        return 'Intern';
    };
};