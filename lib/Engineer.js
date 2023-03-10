// calling employee info from Employee.js
const Employee = require('/Users/frank/Desktop/bootcamp/team-profile-generator/lib/Employee.js');

class Engineer extends Employee {
    constructor(name, id, email, gitHubName) {
        super(name, id, email);
        this.gitHubName = gitHubName;
    };

    //Overrides 'Employee' as default
    getRole() {
        return 'Engineer';
    };
};

module.exports = Engineer;