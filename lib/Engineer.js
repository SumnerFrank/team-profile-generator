// calling employee info from Employee.js
const Employee = require('lib/Employee.js');

class Engineer extends Employee {
    constructor(name, id, email, gitHubName) {
        super(name, id, email);
    };

    getRole() {
        return 'Engineer';
    };
};