const Shape = require('./shape.js');

class Square extends Shape {
    constructor(sideLength) {
      super();
      this.sideLength = sideLength;
    }
  
    render() {
        const startcoord = `<rect x="` + (300 - this.sideLength)/2 + `" y="` + (200 -this.sideLength)/2 + `" `;
        return `  ${startcoord}width="${this.sideLength}" height="${this.sideLength}" fill="${this.color}" />`;
    }
  }

  module.exports = Square;