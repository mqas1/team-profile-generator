const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const dayjs = require('dayjs');
const fs = require('fs');
const getHTML = require('./src/template');
const teamArr = [];

// question array for the second menu where the user can choose any number of
// engineers and interns. Includes validation and input and presents certain
// questions depending on user input.
const questions = [
  {
    type: 'list',
    message: 'Would you like to add some more members to the team?',
    choices: ['Engineer', 'Intern', 'Finish building my team'],
    name: 'role'
  },
  {
    type: 'input',
    message(answers) {
      return `what is your ${answers.role}'s given name?`
    },
    name: 'employeeName',
    when(answers) {
      return answers.role === 'Engineer' || answers.role === 'Intern';
    },
    validate(input) {
      if (/\D/g.test(input)) {
        return true;
      }
      throw Error('Please provide a valid name.');
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
    },
    validate(input) {
      if (/\d/g.test(input)) {
        return true;
      }
      throw Error('Please provide a valid number.');
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
    },
    validate(input) {
      if (/[\w\W]/g.test(input)) {
        return true;
      }
      throw Error('Please provide a valid email address.');
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
    },
    validate(input) {
      if (/[\w\W]/g.test(input)) {
        return true;
      }
      throw Error('Please provide a valid GitHub username.');
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
    },
    validate(input) {
      if (/\D/g.test(input)) {
        return true;
      }
      throw Error('Please provide a valid school name.');
    }
  }
];

// Function for greeting the user depending on the time of day they access the program
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

// The first question menu where the user inputs the manager's details
// which are used to create a new instance of a Manager class.
// This is then pushed into the array for team members.
const addManager = () => {
  inquirer.prompt([
    {
      type: 'input',
      message: `${generateGreeting()} What is your given name, Team Manager?`,
      name: 'name',
      validate(input) {
        if (/\D/g.test(input)) {
          return true;
        }
        throw Error('Please provide a valid name.');
      }
    },
    {
      type: 'input',
      message(answers) {
        return `${answers.name}, what is your employee ID?`},
      name: 'id',
      validate(input) {
        if (/\d/g.test(input)) {
          return true;
        }
        throw Error('Please provide a valid number.');
      }
    },
    {
      type: 'input',
      message(answers) { 
        return `${answers.name}, what is your email address?`
      },
      name: 'email',
      validate(input) {
        if (/[\w\W]/g.test(input)) {
          return true;
        }
        throw Error('Please provide a valid email address.');
      }
    },
    {
      type: 'input',
      message(answers) { 
        return `${answers.name}, what is your office number?`
      },
      name: 'officeNumber',
      validate(input) {
        if (/\d/g.test(input)) {
          return true;
        }
        throw Error('Please provide a valid number.');
      }
    }
  ])
  .then(answers => {
    const {name, id, email, officeNumber} = answers;
    const manager = new Manager(name, id, email, officeNumber);
    teamArr.push(manager);
  })
  .then(addTeamMembers)
}

// Function for adding team members. Any number of engineers and interns can be selected.
// The program only ends when the user answers the main menu question with 'finish building my team'.
// The user input is used to create instances of Engineer and Intern classes which are pushed into the team array.
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
      console.log(`\nYou have successfully built your team profile!\nCheck it out in the dist folder!`);
      return teamArr;
    }
  })
  .then(writeToFile('./dist/teamProfile.html', getHTML(teamArr)));
}

// Function for accessing the file system to save the inputted data
const writeToFile = (fileName, data) => {
  fs.writeFileSync(fileName, data, (err) => 
     err ? console.log(err) : console.log('Successfully created a HTML file!')
  );
}

const init = () => {
  addManager();
}

init();