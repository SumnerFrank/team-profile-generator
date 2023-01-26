// calling employee info from Employee.js
const Employee = require('/Users/frank/Desktop/bootcamp/team-profile-generator/lib/Employee.js');

class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        super(name, id, email);
        this.officeNum = officeNum;
    };

    //Overrides 'Employee' as default
    getRole() {
        return 'Manager';
    };
};

module.exports = Manager;