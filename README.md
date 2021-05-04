# Team-Profile-Generator

---

<a href="https://img.shields.io/badge/JavaScipt-69.6%25-yellow"><img alt="JavaScript use" src="https://img.shields.io/badge/JavaScipt-85.5%25-yellow"></a> <a href="https://img.shields.io/badge/HTML-14.5%25-green"><img alt="html badge" src="https://img.shields.io/badge/HTML-14.5%25-green"><a href="https://img.shields.io/badge/CSS-yellow"><img alt="CSS badge" src="https://img.shields.io/badge/CSS-yellow"><a href="https://img.shields.io/badge/Used-Node.js-red"><img alt="Node.js use" src="https://img.shields.io/badge/Used-Node.js-red"></a> <a href="https://img.shields.io/badge/npm-Inquirer-orange"><img alt="npm package Inquirer" src="https://img.shields.io/badge/npm-Inquirer-orange"></a><a href="https://img.shields.io/badge/npm-Inquirer-blue"><img alt="npm package Jest" src="https://img.shields.io/badge/npm-Jest-blue"></a>

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Methodology](#methodology)
- [License](#license)

## Description

This application is a Node command line application that takes in information about team members of a software engineering team and generates an HTML webpage that displays the whole software engineering team. There is a place for a Manager, Engineers and Interns. You can add as many Engineers and Interns as you need!

Since testing is a key piece in making code maintainable, this application also includes Jest unit tests under `__tests__` directory.

The live page can be viewed on GitHub Pages here: 

![Generated team webpage]()

## Installation

###### ATTENTION: Node.js installation is required prior to use!

To generate your own HTML team page, first download the repository and run `npm install` in order to install the following npm package dependencies as specified in the [`package.json`]():

* [`inquirer`](https://www.npmjs.com/package/inquirer) will prompt the user for the team member's email, id, and specific information based on their role. For instance, an intern may provide their school, whereas an engineer may provide their GitHub username.
* [`jest`](https://jestjs.io/) will run unit tests to ensure that the `Employee`, `Manager`, `Engineer`, and `Intern` objects are generated from their classes correctly.

Once you have `npm install`, you can run the Node CLI application with `npm start` which will begin the questions about your engineering team. You can run the tests at any time with `npm test`.

## Usage

### User Input

This Node CLI will prompt you to generate a webpage for your software engineering team. The application will prompt you for information about the team manager and then information about team members. You can input any number of team members, including a mix of engineers and interns. Validation is implemented to ensure that information provided is in the proper expected format.

### Roster Output

When you have completed building the team, inputting `n` for "no" will end the prompt and the application will then generate an `index.html` page in the `dist/` directory, that displays a nicely formatted team roster based on the information you provided. Each team member displays the following:

  * Name;
  * Role;
  * ID; and
  * Role-specific property (office number, link to GitHub profile, or university).

## Methodology

### Directory Structure

The directory structure of the application is as follows:

```
__test__/      // Jest tests
    Employee.test.js
    Engineer.test.js
    Intern.test.js
    Manager.test.js
dist/          // Rendered output (HTML) and CSS style sheet
lib/           // Classes as well as helper code to generate HTML
src/           // Templates for main HTML <body> and employee <div>s
    Engineer.html
    Intern.html
    Main.html
    Manager.html
index.js       // Runs the application
prompts.js     // Inquirer prompts
```

### Classes

This application utilizes JavaScript's brand of object-oriented programming by using constructors, the prototype chain, and the `ES6` pattern of `class`. 

The different employee types, `Manager`, `Engineer`, and `Intern`, inherit methods and properties from a base class of `Employee`.

The first class is an `Employee` parent class with the following properties and methods:

  * name
  * id
  * email
  * getName()
  * getId()
  * getEmail()
  * getRole() // Returns 'Employee'

The other three classes extend `Employee`. In addition to `Employee`'s properties and methods, `Manager` also has:

  * officeNumber
  * getRole() // Overridden to return 'Manager'

In addition to `Employee`'s properties and methods, `Engineer` also has:

  * github // GitHub username
  * getGithub()
  * getRole() // Overridden to return 'Engineer'

In addition to `Employee`'s properties and methods, `Intern` also has:

  * school 
  * getSchool()
  * getRole() // Overridden to return 'Intern'

### Test-Driven Development (TDD)

The development of this application focused on writing tests and ensuring application features passed to ensure code was understandable and maintainable. The methods on the classes were also developed to be as simple and pure as possible so that they are easier to test. The suite of `Jest` tests for the above classes in the `__tests__/` directory currently pass. Ultimately, these tests serve as fail-safes for future maintenance of the code base.

## License

<a href="https://img.shields.io/badge/License-MIT-brightgreen"><img src="https://img.shields.io/badge/License-MIT-brightgreen"></a>