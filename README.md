# SVG Logo Maker
  
## Description
 This is an application that will generate a SVG (Scalable Vector Graphics) file, based on the answers to a number of questions. The resulting image will either be a circle, rectangle or square with one to three characters wthin the selected shape. The color of any shape (and its corresponding text) can be any of color as defined by the user. 

## Table of contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  
## Installation
This program requires the the use of Node.js. Node js will need the be installed, along with the both the inquirer 8.2.4 and Jest 28.1.3 packages.
Installation of the inquirer package requires that the following be entered: npm i inquirer@8.2.4
Installtion of the Jest ackage requires that the following be entered: npm install --save-dev jest

Any vulnerbility warnings received with those respective packages can be ignored. This should not impact the operaton of the application. 
  
## Usage
Application can be started by opening a terminal session within the application's installed folder and running: node index.js. Answer each of the four prompts. Thereafter the application will create either a SVG file, or produce an error message if any of inputs are not valid. The application will only produce a file provided that the text provided is of three characters or less, and that any colors specified are valid. Colors can be specified using a literal string line red, green, etc. Colors can also be specified using a six digit hex notation like #FF00FF. A video showing a demonstation of the application can be found below:

https://drive.google.com/file/d/12S33IWCX3ByuteQmMxYae053fjlz2lHS/view?usp=sharing
  
## Contributing
All code written by Warren Shan. Special thanks to ChatGPT for providing a list of string literals for all 140 color names accepted by all browsers.
  
## Tests
Four tests have been written. One is to test that the Shape class constructor throws a specific error if the render() method is called, as this should only be invoked using a child class. The other three tests are for the Circle, Square and Triangle classes to see if their outputs conform to their expected result. These tests can all be run using the command: npm run test  
  
## License
None
