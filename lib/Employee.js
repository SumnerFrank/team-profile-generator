//Creates the default template for any employee, changes to be made in each individual employment type tab

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    };

    getName() {
        return this.name;
    };

    getId() {
        return this.name;
    };

    getEmail() {
        return this.email;
    };

    getRole() {
        return 'Employee';
    };
}; 