const Shape = require('./shape.js');

class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }
    // The function below renders the circle XML required for a valid SVG definition of a circle
    // The function employs the provided unit radius property to create a circle 
    render() {
      return `<circle cx="150" cy="100" r="${this.radius}" fill="${this.color}" />`;
    }
  }

  module.exports = Circle;