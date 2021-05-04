// External packages
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");

// Internal modules
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const render = require("./lib/htmlRenderer");
const questions = require('./questions');

const outputDir = path.resolve(__dirname, "output");
const outputPath = path.join(outputDir, "main.html");

// Array to contain all Employee objects to render HTML.
const employees = [];

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

    // Prompt to add another team member.
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

// Function to create Engineer or Intern.
async function createEmployee() {

    // Promtps to add an Engineer or Intern,
    let employeeRole = await inquirer.prompt(questions.employee);

    switch (employeeRole.empRole) {
        case 'Engineer':
            let engResponses = await inquirer.prompt(questions.engineer);
            let newEngineer = new Engineer
                (engResponses.engName,
                    engResponses.engId,
                    engResponses.engEmail,
                    engResponses.engGithub);
            employees.push(newEngineer);
            console.log("Thank you. We've added an Engineer to the team: ", newEngineer);
            await confirmEmployee();
            break;
        case 'Intern':
            let internResponses = await inquirer.prompt(questions.intern);
            let newIntern = new Intern
                (internResponses.internName,
                    internResponses.internId,
                    internResponses.internEmail,
                    internResponses.internSchool);
            employees.push(newIntern);
            console.log("Thank you. We've added an Intern to the team: ", newIntern);
            await confirmEmployee();
    };

};

// Main function
async function init() {
    try {
        /* 
        Code to use Inquirer to gather information about team members. Based on responses, objects are created for each team member.
        */

        // Collect information about required Manager role and create a Manager object.
        await createManager();

        // Next, ask to create another team member and createEmployee() within confirmEmployee function
        await confirmEmployee();

    } catch (error) {
        console.log(error);
    };

};

init();