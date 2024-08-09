const Shape = require('./shape.js');

class Square extends Shape {
    constructor(sideLength) {
      super();
      this.sideLength = sideLength;
    }
  
    area() {
      return this.sideLength ** 2;
    }
  
    perimeter() {
      return 4 * this.sideLength;
    }
  }

  module.exports = Square;