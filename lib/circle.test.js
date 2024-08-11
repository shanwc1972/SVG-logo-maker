const Circle = require('./circle.js');
// The following test is to ensure that XML rendered by the render() method is correct. 
describe('Circle', () => {
    test('render() should produce a string matching its SVG definition', () => {
        const shape = new Circle(90);
        shape.setColor("darkgreen");
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="90" fill="darkgreen" />');
    });
})