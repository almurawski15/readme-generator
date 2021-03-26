//Packages Installed
const fs = require('fs');
const inquirer = require('inquirer');
const axios = require('axios');

//Inquirer prompts for user input
inquirer
  .prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your application?'
    },

    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description for your application'
    },

    {
        type: 'input',
        name: 'instructions',
        message: 'Please provide your installation instructions for your application'
    },

    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions and examples of your application in use for your application usage section'
    },

    {
        type: 'input',
        name: 'contribution',
        message: 'Please provide the guidelines for other developers to be able to contribute to the application'
    },

    {
        type: 'input',
        name: 'test',
        message: 'If applicable, please provide any test instructions for the application'
    },

    {
        type: 'list',
        name: 'license',
        choices: ['GNU GPLv3', 'Apache License 2.0', 'MIT License'],
        message: 'Please choose a license for your application'
    },

    {
        type: 'input',
        name: 'username',
        message: 'Please provide your GitHub username'
    },

    {
        type: 'input',
        name: 'email',
        message: 'Please provide your email address'
    },

  ])

// Function to write README file
.then(function(data) {
    axios
    .get(`https://api.github.com/users/${data.username}`)
    .then(function(res) {
        console.log(data.license)
        const getLicense = (license) => {
            if (license === 'MIT License'){
                return  `\r[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`; 
            } else if (license === 'GNU GPLv3') {
                return `\r[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
            } else if (license === 'Apache License 2.0') {
                return `\r[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`; 
            }
        }
        const readMe = `
    
# ${data.title}

## Description

${data.description}

## Table of Contents

- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Contributors](#Contribution)
- [Tests](#Tests)
- [Questions](#Questions)

## Installation

${data.instructions}

## Usage 

${data.usage}

## License

This project has been licensed through ${data.license}.

## Contribution

${data.contribution}

## Tests

${data.test}

## Questions

If you have any questions, please reach out to me via email at ${data.email}.`
    
        fs.writeFile('README.md', readMe, (err) => {
            if (err) {
                throw err;
            };
            console.log("Success! Your new README file has been created.");
        });
    });
});

function init() {

}

init();