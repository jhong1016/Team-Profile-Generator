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

// Array to contain all employee objects to render HTML
const employee = [];

// ------------------------------------------------------------------

// Function to create a manager object
createManager();

function createManager(){
    let managerResponses = await inquirer.prompt(questions.manager);

    // Create new object from class and add to employee array
    let newManager = new Manager
        (managerResponses.mgrName,
        managerResponses.mgrId,
        managerResponses.mgrEmail,
        managerResponses.mgrOffice);

    employee.push(newManager);

    console.log("A manager has been added to the team: ", newManager);
};
