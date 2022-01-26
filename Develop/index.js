// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "Enter your projects title",
        name: 'title'
    },
    {
        type: 'input',
        message: "Enter your projects description",
        name: 'description'
    },
    {
        type: 'input',
        message: "Enter installation instructions",
        name: 'install'
    },
    {
        type: 'input',
        message: "Enter usage information",
        name: 'usage'
    },
    {
        type: 'input',
        message: "Enter contribution guidelines",
        name: 'contribution'
    },
    {
        type: 'input',
        message: "Enter test information",
        name: 'test'
    },
    {
        type: 'list',
        message: "Choose a license",
        name: 'license',
        choices: ["MIT", "GNU GPLv3", "Apache", "Mozilla Public"]
    },
    {
        type: 'input',
        message: "Enter your Github url",
        name: 'github'
    },
    {
        type: 'input',
        message: "Enter email address",
        name: 'email'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, generateMarkdown(data)), (err) =>
        err ? console.log(err) : console.log('Readme created')
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            console.log("Response " + response);
            writeToFile("README.md", response);
        }
)}; 

// Function call to initialize app
init();
