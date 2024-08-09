class Shape {
    constructor() {
      if (this.constructor === Shape) {
        throw new Error("Shape is an abstract class and cannot be instantiated directly.");
      }
    }
  
    area() {
      throw new Error("Method 'area()' must be implemented.");
    }
  
    perimeter() {
      throw new Error("Method 'perimeter()' must be implemented.");
    }
  }

  module.exports = Shape;