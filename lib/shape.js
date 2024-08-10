class Shape {
    constructor() {
      this.color = '';
    }
  
    setColor(color) {
      this.color = color;
    }
  
    render() {
      throw new Error('A render() method must be implemented via a child class.');
    }
  }

  module.exports = Shape;