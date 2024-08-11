const Shape = require('./shape.js');
//The following test checks if an error is thrown if the render() method for Shape (a parent class) is invoked 
describe('Shape', () => {
    test('should throw error if render() is called', () => {
      const shape = new Shape();
      const err = new Error('A render() method must be implemented via a child class.')
      expect(shape.render).toThrow(err);
    });
  });