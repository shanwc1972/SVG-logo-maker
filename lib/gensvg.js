const Square = require('./square.js');
const Circle = require('./circle.js');
const Triangle = require('./triangle.js');

// The following function generates the SVG XML based off the answers provided in inquirer
function gensvg(data){
    const answers = [];
    let myAnswer = {};
  
    console.log(data);
  
    //Put our answer data into an answers array
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
          myAnswer.key = key;
          myAnswer.value = data[key]; 
          answers.push(myAnswer);
          myAnswer = {};
      }
    };
    console.log(answers);

    let output =`
    <svg>
    </svg>`;
    return output;
}

module.exports = { gensvg }