// External packages
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");

// Internal modules
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const render = require("./lib/htmlRenderer");

const outputDir = path.resolve(__dirname, "output");
const outputPath = path.join(outputDir, "main.html");

// Array to contain all Employee objects to render HTML.
const employees = [];

// ------------------------------------------------------------------

const managerQuestions = [
    {
        type: 'input',
        message: "This application will generate an HTML page for a software engineering team. A software engineering team usually consists of a Manager and any number of engineers and interns. First, what is your Manager's name?",
        name: 'mgrName',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid name is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is your manager's employee ID?",
        name: 'mgrId',
        default: '101',
        validate: function (answer) {
            if (answer <= 0) {
                return console.log("A valid employee ID is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is your manager's email address?",
        name: 'mgrEmail',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid email address is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is your manager's office number?",
        name: 'mgrOffice',
        default: '414',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid office number is required.");
            }
            return true;
        }
    },
];

const confirmEmployee = [
    {
        type: 'confirm',
        message: "Would you like to add another team member?",
        name: 'confirmEmp',
    }
];

const employeeType = [
    {
        type: 'list',
        message: "Would you like to add an Engineer or Intern?",
        choices: ['Engineer', 'Intern'],
        name: 'empRole',
    }
];

const engineerQuestions = [
    {
        type: 'input',
        message: "What is your Engineer's name?",
        name: 'engName',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid name is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is your Engineer's employee ID?",
        name: 'engId',
        default: '212',
        validate: function (answer) {
            if (answer <= 0) {
                return console.log("A valid employee ID is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is your Engineer's email address?",
        name: 'engEmail',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid email address is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is your Engineer's GitHub?",
        name: 'engGithub',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid GitHub is required.");
            }
            return true;
        }
    }
];

const internQuestions = [
    {
        type: 'input',
        message: "What is your Intern's name?",
        name: 'internName',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid name is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is your Intern's employee ID?",
        name: 'internId',
        default: '616',
        validate: function (answer) {
            if (answer <= 0) {
                return console.log("A valid employee ID is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is your Intern's email address?",
        name: 'internEmail',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid email address is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is the name of your Intern's university?",
        name: 'internSchool',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid school is required.");
            }
            return true;
        }
    }
];

module.exports = {
    manager: managerQuestions,
    create: confirmEmployee,
    employee: employeeType,
    engineer: engineerQuestions,
    intern: internQuestions
};

// ------------------------------------------------------------------

// Function to create a Manager object.
async function createManager(){
    let managerResponses = await inquirer.prompt(questions.manager);

    // Create new object from class and add to Employee array.
    let newManager = new Manager
        (managerResponses.mgrName,
        managerResponses.mgrId,
        managerResponses.mgrEmail,
        managerResponses.mgrOffice);

    employees.push(newManager);

    console.log("Thank you. A manager has been added to the team: ", newManager);
};

// Function to ask to create a new team member.
async function confirmEmployee() {

    // Would you like to add another team member?
    let confirmEmployee = await inquirer.prompt(questions.create);

    switch (confirmEmployee.confirmEmp) {
        case false:
            console.log("Thank you. Here are your team members: ", employees);
            console.log('Generating your HTML page...');
            return;

        // If yes to add another team member, ask whether to create an Engineer or Intern.
        case true:
            await createEmployee();
    };
};



init();
