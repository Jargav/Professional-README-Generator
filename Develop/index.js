// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');


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
     fs.writeFileSync(fileName, data, (err) =>
     err ? console.error(err) : console.log('Commit entered!')
     );
};

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: questions[0].question,
                name: questions[0].name
            },
            {
                type: 'input',
                message: questions[1].question,
                name: questions[1].name
            },
            {
                type: 'input',
                message: questions[2].question,
                name: questions[2].name
            },
            {
                type: 'input',
                message: questions[3].question,
                name: questions[3].name
            },
            {
                type: 'list',
                message: questions[4].question,
                name: questions[4].name,
                choices: questions[4].choices
            },
            {
                type: 'input',
                message: questions[5].question,
                name: questions[5].name
            },
            {
                type: 'input',
                message: questions[6].question,
                name: questions[6].name
            },
            {
                type: 'input',
                message: questions[7].question,
                name: questions[7].name
            },
            {
                type: 'input',
                message: questions[8].question,
                name: questions[8].name
            },
            {
                type: 'input',
                message: questions[9].question,
                name: questions[9].name
            }
        ])
        .then((answers) => {
            console.log(answers)
            writeToFile(fileName, generateMarkdown(answers))
        })
}


// Function call to initialize app
  init();

 
