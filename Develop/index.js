// External packages
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");

// Internal modules
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const render = require("./lib/htmlRenderer");
const questions = require('./prompts');

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

    console.log("A manager has been added to the team: ", newManager);
};

// Function to ask to create a new team member.
async function confirmEmployee() {

    // Prompt to add another team member.
    let confirmEmployee = await inquirer.prompt(questions.create);

    switch (confirmEmployee.confirmEmp) {
        case false:
            console.log("Here is your team: ", employees);
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
            console.log("An Engineer has been added to the team: ", newEngineer);
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
            console.log("An Intern has been added to the team: ", newIntern);
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

    try {
        /* After the user has inputed all employees desired, call the render function and pass an array containing all employee objects.
        The render function will generate and return a block of HTML including templated divs for each employee. */
        let renderedHTML = render(employees);

        /* Take HTML returned from render() function and write to file named index.html in the dist folder */
        fs.writeFileSync('./dist/index.html', renderedHTML);

        console.log('Done! Your HTML page has been generated in the dist folder.')

    } catch (error) {
        console.log(error);
    }

};

init();