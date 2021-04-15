// : Include packages needed for this application
//inquirer
const fs = require("fs");
const inquirer = require("inquirer");
const render = require("./utils/generateMarkdown");

// : Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'projectName',
    },
    {
        type: 'input',
        message: 'What would you like to name your readme?',
        name: 'readmeName',
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Please provide a description of your project:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please provide Installation Instructions:',
        name: 'install',
    },
    {
        type: 'input',
        message: 'Please provide Usage Information: ',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Please provide Contribution Guidelines: ',
        name: 'contributions',
    },
    {
        type: 'input',
        message: 'Please provide Test Instructions: ',
        name: 'testing',
    },
    {
        type: 'list',
        message: 'Please Select which License was used: ',
        choices: ['Apache', 'Creative Commons', 'GNU', 'MIT', 'Mozilla', 'Open Data Commons'],
        name: 'license',
    },
];

// : Create a function to write README file
function writeToFile(fileName, data) {
    let licenseData = render(data);
    let readmeData = 
`# ${data.projectName}

${licenseData.badge}

## Table of Contents
    
1. [Description](##description)
2. [Installation Instructions](##installation-instructions)
3. [Usage Information](##usage-information)
4. [Contribution Guidelines](##contribution-guidelines)
5. [Test Instructions](##test-instructions)
6. [Questions](##questions)
${licenseData.link}
    
    
    
## Description
${data.description}
    
## Installation Instructions
${data.install}
    
## Usage Information
${data.usage}
    
## Contribution Guidelines
${data.contributions}
    
## Test Instructions
${data.testing}
    
## Questions
If you have further questions about the functionality of this application or need clarification regarding certain areas the creator can be contacted at:<br>
Email: ${data.email} <br>
Github: https://github.com/${data.username}/
    
${licenseData.section}
    
`;
    fs.appendFile(fileName, readmeData, (error) => 
    error? console.error(error) : console.log("Readme Created!")
    );
}

// : Create a function to initialize app
function init() {
// use inquirer
//get the answers object
// write that content to a file using a call to writeToFile
inquirer
.prompt(questions)
.then(answers => {
    writeToFile(answers.readmeName, answers);
})
.catch(error => {

});
}

// Function call to initialize app
init();
