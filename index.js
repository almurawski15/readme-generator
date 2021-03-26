//Packages Installed
const fs = require('fs');
const inquirer = require('inquirer');

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
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
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
  .then(answers => {
    // Use user feedback for... whatever!!
  })
  .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });