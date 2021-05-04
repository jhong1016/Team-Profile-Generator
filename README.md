# Team-Profile-Generator

## Application Description

This application is a Node command line application that takes in information about team members of a software engineering team and generates an HTML webpage that displays summaries for each team member. 

Since testing is a key piece in making code maintainable, this application also includes a suites of Jest unit tests, and the development of this project was focused on test-driven development.

The live page can be viewed on GitHub Pages here: https://connietran-dev.github.io/team-page-generator/index.html

![Generated team webpage](images/teampage-generator.png)

## Usage

### User input

This Node CLI will prompt you to generate a webpage for your software engineering team. The application will prompt you for information about the team manager and then information about team members. You can input any number of team members, including a mix of engineers and interns. Validation is implemented to ensure that information provided is in the proper expected format.

### Roster output

When you have completed building the team, the application then generates an `index.html` page in the `dist/` directory, that displays a nicely formatted team roster based on the information you provided. Each team member displays the following:

  * Name;
  * Role;
  * ID; and
  * Role-specific property (office number, link to GitHub profile, or university).

## Installation

To generate your own HTML team page, first download the repository and run `npm install` in order to install the following npm package dependencies as specified in the [`package.json`](https://github.com/connietran-dev/team-page-generator/blob/master/package.json):

* [`inquirer`](https://www.npmjs.com/package/inquirer) will prompt the user for the team member's email, id, and specific information based on their role. For instance, an intern may provide their school, whereas an engineer may provide their GitHub username.
* [`jest`](https://jestjs.io/) will run unit tests to ensure that the `Employee`, `Manager`, `Engineer`, and `Intern` objects are generated from their classes correctly.

Once you have `npm install`, you can run the Node CLI application with `npm start` which will begin the questions about your engineering team. You can run the tests at any time with `npm test`.

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
index.js       // Runs the application
questions.js   // Inquirer prompts
```

