// TODO: Include packages needed for this application
const fs = require('fs');
//const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');


const fileName = 'README2.md';
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        question: 'What is the name of your project?',
        name: 'title'
    },
    {
        type: 'input',
        question: 'Describe your project.',
        name: 'description'
    },
    {
        type: 'input',
        question: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
        name: 'installation'
    },
    {
        type: 'input',
        question: 'Provide instructions and examples for use.',
        name: 'usage'
    },
    {
        type: 'list',
        question: 'Please select the license you would like to choose:',
        name: 'license',
        choices: ['MIT', 'GNU GPLv3', 'Apache License 2.0']
    },
    {
        type: 'input',
        question: 'Why would you build this?',
        name: 'why'
    },
    {
        type: 'input',
        question: 'Would you like other developers to contribute it? How would they go about this?',
        name: 'contributing'
    },
    {
        type: 'input',
        question: 'Write tests for your application. Then provide examples on how to run them.',
        name: 'tests'
    },
    {
        type: 'input',
        question: 'What is your GitHub username?',
        name: 'gitHubUsername'
    },
    {
        type: 'input',
        question: 'What is your email address?',
        name: 'emailAddress'
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
async function init() {
    let answers = await inquirer.prompt(questions)
    .then((answers) => {
        console.log(answers);
        var data = generateMarkdown(answers);
        JSON.stringify(data)
        writeToFile("generatedREADME.md", data);
    })
}

// Function call to initialize app
  init();

 
