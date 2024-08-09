const Shape = require('./shape.js');

class Triangle extends Shape {
    constructor(sideA, sideB, sideC) {
      super();
      this.sideA = sideA;
      this.sideB = sideB;
      this.sideC = sideC;
    }
  
    area() {
      // Using Heron's formula
      const s = (this.sideA + this.sideB + this.sideC) / 2;
      return Math.sqrt(s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC));
    }
  
    perimeter() {
      return this.sideA + this.sideB + this.sideC;
    }
  }

  module.exports = Triangle;