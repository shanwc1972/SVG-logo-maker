const Triangle = require('./triangle.js');

describe('Triangle', () => {
    test('render() should produce a string matching its SVG definition', () => {
        const shape = new Triangle(130);
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 30 280, 160 20, 160" fill="blue" />');
    });
})