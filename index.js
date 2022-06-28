const { prompt } = require("inquirer");
const db = require("./db");
require("console.table");

// initilize the app

init();

function init() {
    loadPrompts();
}

// Create prompts





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
                    name: "Add department",
                    value: "ADD_DEPARTMENT"
                },
                {
                    name: "Add role",
                    value: "ADD_ROLE"
                },
                {
                    name: "Add employee",
                    value: "ADD_EMPLOYEE"
                },
                {
                    name: "Exit",
                    value: "EXIT"
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
            case "ADD_DEPARTMENT":
                addDepartment();
                break;
            case "ADD_ROLE":
                addRole();
                break;
            case "ADD_EMPLOYEE":
                addEmployee();
                break;
                default:
                exit();
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

// add a department

function addDepartment() {
    prompt([
      {
        name: "name",
        message: "What departmenmt would you like to add?"
      }
    ])
      .then(res => {
        let name = res;
        db.createDepartment(name)
          .then(() => console.log(`${name.name} added to the database`))
          .then(() => loadPrompts())
      })
  }

  // add a role 

  function addRole() {
    db.showAllDepartments()
      .then(([rows]) => {
        let departments = rows;
        const departmentChoices = departments.map(({ id, name }) => ({
          name: name,
          value: id
        }));
  
        prompt([
          {
            name: "title",
            message: "What is the role?"
          },
          {
            name: "salary",
            message: "What is the salary?"
          },
          {
            type: "list",
            name: "department_id",
            message: "Which department does the role belong to?",
            choices: departmentChoices
          }
        ])
          .then(role => {
            db.createRole(role)
              .then(() => console.log(`Added ${role.title} to the database`))
              .then(() => loadPrompts())
          })
      })
  }
  
  

  // add an employee

  function addEmployee() {
    prompt([
      {
        name: "first_name",
        message: "Enter employee's first name"
      },
      {
        name: "last_name",
        message: "Enter employee's last name?"
      }
    ])
      .then(res => {
        let firstName = res.first_name;
        let lastName = res.last_name;
  
        db.showAllRoles()
          .then(([rows]) => {
            let roles = rows;
            const roleChoices = roles.map(({ id, title }) => ({
              name: title,
              value: id
            }));
  
            prompt({
              type: "list",
              name: "roleId",
              message: "Select emplyees role",
              choices: roleChoices
            })
              .then(res => {
                let roleId = res.roleId;
  
                db.showAllEmployees()
                  .then(([rows]) => {
                    let employees = rows;
                    const managerChoices = employees.map(({ id, first_name, last_name }) => ({
                      name: `${first_name} ${last_name}`,
                      value: id
                    }));
  
                    managerChoices.unshift({ name: "None", value: null });
  
                    prompt({
                      type: "list",
                      name: "managerId",
                      message: "Select employees manager",
                      choices: managerChoices
                    })
                      .then(res => {
                        let employee = {
                          manager_id: res.managerId,
                          role_id: roleId,
                          first_name: firstName,
                          last_name: lastName
                        }
  
                        db.createEmployee(employee);
                      })
                      .then(() => console.log(
                        `${firstName} ${lastName} added to the database`
                      ))
                      .then(() => loadPrompts())
                  })
              })
          })
      })
  };

  // Exit 
function exit() {
    console.log("Goodbye!");
    process.exit();
  }