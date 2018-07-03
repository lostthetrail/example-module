'use strict';

const greeter = require('./greeter');

test('beSocial', (done) => {
    expect(greeter.beSocial).toBeDefined();

    greeter.beSocial((msg) => {
        const expected = `\u001b[31mI\'m fine.\u001b[39m \u001b[32mHello!\u001b[39m`;
        expect(msg).toBe(expected);
        done();
    });    
});