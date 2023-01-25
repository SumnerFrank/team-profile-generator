// calling employee info from Employee.js
import Employee from '/Users/frank/Desktop/bootcamp/team-profile-generator/lib/Employee.js';

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

export default Intern;