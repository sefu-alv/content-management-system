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
    }


  })
};


// query functions

const viewEmployee = () => {
    
    db.query(
      "SELECT employee.id, employee.first_name, employee.last_name, role.title FROM employee JOIN role ON employee.role_id = role.id",
      (err, res) => {
        if (err) {
          throw err;
        }
        console.table(res);
        promptUser();
      }
    );
  };
  


promptUser();
