const connection = require("./connection");

//  create a DB class to for SQL requests

class DB {

    constructor(connection) {
        this.connection = connection;
    }

     // formatted table showing department names and department ids
    showAllDepartments() {
        return this.connection.promise().query(
        "SELECT department.id, department.name FROM department;"
        );
    }

    // Join job title, role id, the department that role belongs to, and the salary for that role
    showAllRoles() {
        return this.connection.promise().query(
        "SELECT role.id, role.title, department.name AS department, role.salary FROM role LEFT JOIN department on role.department_id = department.id;"
        );
    }

    // Join employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
 
    showAllEmployees() {
        return this.connection.promise().query(
        "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;"
        );
    }

      // crate department
    createDepartment(department) {
        return this.connection.promise().query("INSERT INTO department SET ?", department);
    }
     // create role
    createRole(role) {
        return this.connection.promise().query("INSERT INTO role SET ?", role);
    }
    // create employee
    createEmployee(employee) {
        return this.connection.promise().query("INSERT INTO employee SET ?", employee);
    }

};

module.exports = new DB(connection);