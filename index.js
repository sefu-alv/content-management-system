const inquirer = require("inquirer");
const mysql = require('mysql2');

const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: '',
      database: 'employees_db'
    },
    console.log(`Connected to the courses_db database.`)
  );

  
const questions = [
    
    {
      type: "list",
      message: "What would you like todo?",
      choices: ['View All Employes', 'Add Employee', 'Update Employee Role', 'View All Roles' , 'Add Role' , 'View All Departments' , 'Add Department'],
      name:"db",
    },
    
  
  ];

  function init() {
    inquirer
      .prompt(questions)
      .then((answers) => {});
    }
    init();