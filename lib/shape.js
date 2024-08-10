class Shape {
    constructor() {
      this.color = '';
      if (this.constructor === Shape) {
        throw new Error("Shape is an abstract class and cannot be instantiated directly.");
      }
    }
  
    setColor(color) {
      this.color = color;
    }
  
    render() {
      throw new Error("Method 'render()' must be implemented.");
    }
  }

  module.exports = Shape;