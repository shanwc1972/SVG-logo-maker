const inquirer = require('inquirer');
const fs = require('fs');
const gsvg = require('./lib/gensvg.js');

// Below is a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Generated logo.svg')
      );
}

inquirer
  .prompt([
    {
      type: 'input',
      name: 'threechars',
      message: 'Please enter up to three characters',
    },
    {
      type: 'input',
      name: 'textcolor',
      message: 'Please enter a text color',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Please enter a shape',
      choices: ['circle', 'square', 'triangle'],
    },
    {
      type: 'input',
      name: 'shapecolor',
      message: 'Please enter the shapes color',
    },
  ])
  .then((answers) => {
    const xmlSVG = gsvg.gensvg(answers);
    if(xmlSVG != ''){
        writeToFile('./examples/logo.svg', xmlSVG);
    } else {
        console.log('Input invalid. Error creating logo.svg file.')
    }

  });