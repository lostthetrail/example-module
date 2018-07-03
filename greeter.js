'use strict';

const chalk = require('chalk');

module.exports = {
    beSocial(out = console.log) {
        const msg = `${chalk.red('I\'m fine.')} ${chalk.green('Hello!')}`;
        out(msg);   
    }
};
