const { prompt } = require("inquirer");
const db = require("./db");
require("console.table");

// initilize the app

init();

function init() {
    loadPrompts();
}

// Create prompts


// add a department
// add a role 
// add an employee
// update an employee role
// exit the application

function loadPrompts() {
    prompt([
        {
            type: "list",
            name: "choice",
            message: "What would you like do?",
            choices: [
                {
                    name: "View all departments",
                    value: "SHOW_ALL_DEPARTMENTS"
                },
                {
                    name: "View all roles",
                    value: "SHOW_ALL_ROLES"
                },
                {
                    name: "View all employees",
                    value: "SHOW_ALL_EMPLOYEES"
                },
                {
                    name: "Add a department",
                    value: "add function"
                },
                {
                    name: "Add a role",
                    value: "add function"
                },
                {
                    name: "Add a employee",
                    value: "add function"
                },
                {
                    name: "Update employee role",
                    value: "add function"
                },
                {
                    name: "Exit",
                    value: "add function"
                }
            ]
        }
    ]).then(res => {
        let choice = res.choice;
        switch (choice) {
            case "SHOW_ALL_DEPARTMENTS":
                allDepartments();
                break;
            case "SHOW_ALL_ROLES":
                allRoles();
                break;
            case "SHOW_ALL_EMPLOYEES":
                allEmployees();
                break;
        }
    })

}

// view all departments

function allDepartments() {
    db.showAllDepartments()
      .then(([rows]) => {
        let departments = rows;
        console.table(departments);
      })
      .then(() => loadPrompts());
  }

  // view all roles

  function allRoles() {
    db.showAllRoles()
      .then(([rows]) => {
        let roles = rows;
        console.table(roles);
      })
      .then(() => loadPrompts());
  }

// view all employees

function allEmployees() {
    db.showAllEmployees()
    .then(([rows]) => {
        let employees = rows;
        console.table(employees);
    }).then(() => loadPrompts());
}