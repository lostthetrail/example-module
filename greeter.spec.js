'use strict';

const chalk = require('chalk');
const greeter = require('./greeter');

test('beSocial', (done) => {
    expect(greeter.beSocial).toBeDefined();

    greeter.beSocial((msg) => {
        const expected = chalk.supportsColor ? `\u001b[31mI\'m fine.\u001b[39m \u001b[32mHello!\u001b[39m` : `I\'m fine. Hello!`;        
        expect(msg).toBe(expected);
        done();
    });    
});