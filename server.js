const inquirer = require("inquirer");
const chalk = require('chalk');
const figlet = require('figlet');
console.log(chalk.blue('Hello world!'));
  figlet(`     Employee\n     Manager`, function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    const horizontalLine ='---------------------------------------------------------------';
    console.log(horizontalLine);
    console.log(chalk.cyan(data));
    console.log(horizontalLine)
    promptUser()
  });
  
  const promptUser = () => {
    inquirer.prompt([
    
    {
      type: "list",
      message: "What would you like todo?",
      choices: ['View All Employes', 'Add Employee', 'Update Employee Role', 'View All Roles' , 'Add Role' , 'View All Departments' , 'Add Department'],
      name:"db",
    },
    
  
  ])
};