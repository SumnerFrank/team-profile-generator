// calling employee info from Employee.js
const Employee = require('/Users/frank/Desktop/bootcamp/team-profile-generator/lib/Employee.js');

class Intern extends Employee {
    constructor(name, id, email) {
        super(name, id, email, school);
        this.school = school;
    };

    //Overrides 'Employee' as default
    getRole() {
        return 'Intern';
    };
};

module.exports = Intern;