const Square = require('./square.js');
const Circle = require('./circle.js');
const Triangle = require('./triangle.js');

//The following function determines if a color is valid
function validateColor(color) {
    let hexPattern = /^#([0-9A-F]{3}){1,2}$/i;
    const colorNames = [
        "black", "white", "red", "lime", "blue", "yellow", "cyan", "aqua", "magenta", "fuchsia",
        "silver", "gray", "maroon", "olive", "green", "purple", "teal", "navy",
        "dimgray", "dimgrey", "lightgray", "lightgrey", "darkgray", "darkgrey", "slategray", "slategrey",
        "lightslategray", "lightslategrey", "darkslategray", "darkslategrey", "gainsboro", "lightgrey",
        "indianred", "lightcoral", "salmon", "darksalmon", "lightsalmon", "crimson", "firebrick", "darkred",
        "pink", "lightpink", "hotpink", "deeppink", "mediumvioletred", "palevioletred",
        "lightsalmon", "coral", "tomato", "orangered", "darkorange", "orange",
        "gold", "lightyellow", "lemonchiffon", "lightgoldenrodyellow", "papayawhip", "moccasin", "peachpuff",
        "palegoldenrod", "khaki", "darkkhaki",
        "lavender", "thistle", "plum", "violet", "orchid", "mediumorchid", "mediumpurple", "rebeccapurple",
        "blueviolet", "darkviolet", "darkorchid", "darkmagenta", "indigo", "slateblue", "darkslateblue", "mediumslateblue",
        "greenyellow", "chartreuse", "lawngreen", "limegreen", "palegreen", "lightgreen", "mediumspringgreen",
        "springgreen", "mediumseagreen", "seagreen", "forestgreen", "darkgreen", "yellowgreen", "olivedrab", "darkolivegreen",
        "mediumaquamarine", "darkseagreen", "lightseagreen", "darkcyan",
        "lightcyan", "paleturquoise", "aquamarine", "turquoise", "mediumturquoise", "darkturquoise", "cadetblue",
        "steelblue", "lightsteelblue", "powderblue", "lightblue", "skyblue", "lightskyblue", "deepskyblue", "dodgerblue",
        "cornflowerblue", "royalblue", "mediumblue", "darkblue", "midnightblue",
        "cornsilk", "blanchedalmond", "bisque", "navajowhite", "wheat", "burlywood", "tan", "rosybrown", "sandybrown",
        "goldenrod", "darkgoldenrod", "peru", "chocolate", "saddlebrown", "sienna", "brown",
        "snow", "honeydew", "mintcream", "azure", "aliceblue", "ghostwhite", "whitesmoke", "seashell", "beige", "oldlace",
        "floralwhite", "ivory", "antiquewhite", "linen", "lavenderblush", "mistyrose"
    ];
        
    return hexPattern.test(color) || colorNames.includes(color);
}

// The following function generates the SVG XML based off the answers provided in inquirer
// If any of the inputs are invalid it returns a blank string
function gensvg(data){
    const answers = [];
    let myAnswer = {};
  
    //Put our answer data into an answers array
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
          myAnswer.key = key;
          myAnswer.value = data[key]; 
          answers.push(myAnswer);
          myAnswer = {};
      }
    }
    console.log(answers);

    const textChars = answers[0].value;
    const textColor = answers[1].value;
    const shapeColor = answers[3].value;
    let xmlShape = '';
    let xmlText = '';
    let shape = null;

    //Check if the numbers of characters are three or less and whether text and shape colors are valid 
    if((textChars.length<=3) && validateColor(textColor) && validateColor(shapeColor)){
        switch(answers[2].value){
            case 'circle':
                shape = new Circle(90);
                shape.setColor(shapeColor);
                xmlShape = '  ' + shape.render();
                xmlText = `  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${textChars}</text>`;
                break;
            case 'square':
                shape = new Square(180);
                shape.setColor(shapeColor);
                xmlShape = '  ' + shape.render();
                xmlText = `  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${textChars}</text>`;
                break;
            case 'triangle':
                shape = new Triangle(130);
                shape.setColor(shapeColor);
                xmlShape = '  ' + shape.render();
                xmlText = `  <text x="150" y="150" font-size="60" text-anchor="middle" fill="${textColor}">${textChars}</text>`;
                break;
        }
    
        let output =`
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${xmlShape}
        ${xmlText}
        </svg>`;
        return output;
    } else {
        return '';
    }
    
}

module.exports = { gensvg }