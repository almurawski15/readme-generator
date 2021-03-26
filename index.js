const fs = require('fs');
const inquirer = require('inquirer');

inquirer
  .prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },

    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description for your project'
    },

    {
        type: 'input',
        name: 'instructions',
        message: 'Please provide your installation instructions for your project'
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