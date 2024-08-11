const Shape = require('./shape.js');

class Triangle extends Shape {
    constructor(vertexLength) {
      super();
      this.vertexLength = vertexLength;
    }
    // The function below renders the polygon XML required for a valid SVG definition of a triangular polygon
    // The function employs the provided unit vertex length to create an isosceles triangle  
    render() {
        let firstPoint = "150, 30";
        let secondPoint = " " + (150 + this.vertexLength) + ", " + (30 + this.vertexLength);
        let thirdPoint = " " + (150 - this.vertexLength) + ", " + (30 + this.vertexLength);
        let strPolygon = `<polygon points="` + firstPoint + secondPoint + thirdPoint + `" fill="${this.color}" />`;
        return `${strPolygon}`;
    }
  }

  module.exports = Triangle;