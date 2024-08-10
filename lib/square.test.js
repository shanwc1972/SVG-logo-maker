const Square = require('./square.js');

describe('Square', () => {
    test('render() should produce a string matching its SVG definition', () => {
        const shape = new Square(160);
        shape.setColor("gold");
        expect(shape.render()).toEqual('<rect x="70" y="20" width="160" height="160" fill="gold" />');
    });
})