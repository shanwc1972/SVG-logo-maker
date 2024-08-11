const Shape = require('./shape.js');

class Square extends Shape {
    constructor(sideLength) {
      super();
      this.sideLength = sideLength;
    }
    // The function below renders the rectangle XML required for a valid SVG definition of a square
    // The function employs the provided unit sidelength property to create a centered square  
    render() {
        const startcoord = `<rect x="` + (300 - this.sideLength)/2 + `" y="` + (200 -this.sideLength)/2 + `" `;
        return `${startcoord}width="${this.sideLength}" height="${this.sideLength}" fill="${this.color}" />`;
    }
  }

  module.exports = Square;