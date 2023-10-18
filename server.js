const db = require('./config/connection')
const inquirer = require("inquirer");
const chalk = require('chalk');
const figlet = require('figlet');




    const horizontalLine ='---------------------------------------------------------------';
    console.log(horizontalLine);
    console.log(chalk.cyan(figlet.textSync(`     Employee\n     Manager`)));
    console.log(horizontalLine)
 


  const promptUser = () => {
    inquirer.prompt([
    
    {
      type: "list",
      message: "What would you like todo?",
      choices: ['View All Employes', 'Add Employee', 'Update Employee Role', 'View All Roles' , 'Add Role' , 'View All Departments' , 'Add Department'],
      name:"database",
    },
    
  
  ]).then((answers) => {
    switch(answers.database) {
        case 'View All Employes':
            viewEmployee();
            break;
        case 'Add Employee':
            addEmployee();
            break;
        case 'View All Departments':
            viewDepartments();
            break;
        case 'View All Roles':
            viewRoles();
            break;
        case 'Update Employee Role':
            updateRole();
            break;
        case 'Add Role':
            addRole();
            break;
    }


  })
};


// query functions

const viewEmployee = () => {
    
    db.query(
        "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS Department, role.salary, employee.manager_id " + 
        "FROM employee " +
        "JOIN role ON employee.role_id = role.id " +
        "JOIN department ON role.department_id = department.id",
      (err, res) => {
        if (err) {
          throw err;
        }
        console.table(res);
        promptUser();
      }
    );
  };
//   functions 
  const addEmployee = () => {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'first_name',
          message: 'Enter the first name of the employee:',
        },
        {
          type: 'input',
          name: 'last_name',
          message: 'Enter the last name of the employee:',
        },
        {
          type: 'input',
          name: 'role_id',
          message: 'Enter the role ID for the employee:',
        },
        {
          type: 'input',
          name: 'manager_id',
          message: 'Enter the manager ID for the employee:',
        },
      ])
      .then((answers) => {
        const { first_name, last_name, role_id, manager_id } = answers;
  
        
        db.query(
          'UPDATE employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)',
          [first_name, last_name, role_id, manager_id],
          (err, res) => {
            if (err) {
              throw err;
            }
            promptUser(); 
          }
        );
      });
  };
  const viewDepartments = () => {
    db.query(
      "SELECT * FROM department",
      (err, res) => {
        if (err) {
          throw err;
        }
        console.table(res);
        promptUser();
      }
    );
  }
  const viewRoles = () => {
    db.query(
      "SELECT * FROM role",
      (err, res) => {
        if (err) {
          throw err;
        }
        console.table(res);
        promptUser();
      }
    );
  }
  const updateRole = () => {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'first_name',
          message: 'First name of employee?',
        },
        {
          type: 'input',
          name: 'last_name',
          message: 'Last name of employee?',
        },
        {
          type: 'input',
          name: 'new_role_id',
          message: 'Enter the new role ID:',
        },
      ])
      .then((answers) => {
        const { first_name, last_name, new_role_id } = answers;
  
        db.query(
          'UPDATE employee SET role_id = ? WHERE first_name = ? AND last_name = ?',
          [new_role_id, first_name, last_name],
          (err, res) => {
            if (err) {
              throw err;
            }
            promptUser();
          }
        );
      });
  };
  const addRole = () => {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'role',
          message: 'Please provide the name of the role:',
        },
        {
          type: 'input',
          name: 'salary',
          message: 'Please provide the salary of the role:',
        },
        {
          type: 'input',
          name: 'department',
          message: 'Please provide the department where the role will be stored:',
        },
      ])
      .then((answers) => {
        const { role, salary, department } = answers;
  
        db.query(
          'INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)',
          [role, salary, department],
          (err, res) => {
            if (err) {
              throw err;
            }
            promptUser();
          }
        );
      });
  };
  
  
promptUser();
