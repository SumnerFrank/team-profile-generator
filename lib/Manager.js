// calling employee info from Employee.js
const Employee = require('lib/Employee.js');

class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        super(name, id, email);
    };

    //Overrides 'Employee' as default
    getRole() {
        return 'Manager';
    };
};