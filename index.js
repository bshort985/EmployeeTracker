const { prompt } = require("inquirer");
const { inherits } = require("util");
const db = require("./db");
require("console.table");

// initilize the app

init();

// Create prompts
// view all departments
// view all roles
// view all employees
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
                    value: "add function"
                },
                {
                    name: "View all roles",
                    value: "add function"
                },
                {
                    name: "View all employees",
                    value: "add function"
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
    ])

}