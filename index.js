const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const dayjs = require('dayjs');
const fs = require('fs');
const getHTML = require('./src/template');
const teamArr = [];

const questions = [
  {
    type: 'list',
    message: 'Would you like to add some more members to team?',
    choices: ['Engineer', 'Intern', 'Finish building my team'],
    name: 'role'
  },
  {
    type: 'input',
    message(answers) {
      return `what is your ${answers.role}'s name?`
    },
    name: 'employeeName',
    when(answers) {
      return answers.role === 'Engineer' || answers.role === 'Intern';
    }
  },
  {
    type: 'input',
    message(answers) {
      return `What is ${answers.employeeName}'s employee ID?`
    },
    name: 'employeeId',
    when(answers) {
      return answers.role === 'Engineer' || answers.role === 'Intern';
    }
  },
  {
    type: 'input',
    message(answers) {
      return `What is ${answers.employeeName}'s email address?`
    },
    name: 'employeeEmail',
    when(answers) {
      return answers.role === 'Engineer' || answers.role === 'Intern';
    }
  },
  {
    type: 'input',
    message(answers) {
      return `What is ${answers.employeeName}'s GitHub username?`
    },
    name: 'github',
    when(answers) {
      return answers.role === 'Engineer';
    }
  },
  {
    type: 'input',
    message(answers) { 
      return `What school does ${answers.employeeName} attend?`
    },
    name: 'school',
    when(answers) {
      return answers.role === 'Intern';
    }
  }
];

const generateGreeting = () => {
  let runTime = dayjs().format('HH');

  if (runTime < 12){
    return 'Good morning!';
  } else if (runTime >= 12 && runTime < 18){
    return 'Good afternoon!';
  } else {
    return 'Good evening!';
  }
}

const addManager = () => {
  inquirer.prompt([
    {
      type: 'input',
      message: `${generateGreeting()} What is your name, Team Manager?`,
      name: 'name'
    },
    {
      type: 'input',
      message(answers) {
        return `${answers.name}, what is employee ID?`},
      name: 'id'
    },
    {
      type: 'input',
      message(answers) { 
        return `${answers.name}, what is your email address?`
      },
      name: 'email'
    },
    {
      type: 'input',
      message(answers) { 
        return `${answers.name}, what is your office number?`
      },
      name: 'officeNumber'
    }
  ])
  .then(answers => {
    const {name, id, email, officeNumber} = answers;
    const manager = new Manager(name, id, email, officeNumber);
    teamArr.push(manager);
  })
  .then(addTeamMembers)
}

const addTeamMembers = () => {
  inquirer.prompt(questions).then(answers => {
    const {employeeName, employeeId, employeeEmail, role, github, school} = answers;
    
    if (role === 'Engineer') {
      const engineer = new Engineer(employeeName, employeeId, employeeEmail, github);
      teamArr.push(engineer);
      addTeamMembers();
    } else if (role === 'Intern') {
      const intern = new Intern(employeeName, employeeId, employeeEmail, school);
      teamArr.push(intern);
      addTeamMembers();
    } else {
      return teamArr;
    }
  });
  console.log(teamArr);
}

const init = () => {
  addManager();
}

init();