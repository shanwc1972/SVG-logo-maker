const Shape = require('./shape.js');

describe('Shape', () => {
    test('should throw error if render() is called', () => {
      const shape = new Shape();
      const err = new Error('A render() method must be implemented via a child class.')
      expect(shape.render).toThrow(err);
    });
  });