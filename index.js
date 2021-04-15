'use strict';

const supportedRules = require('./rules/supportedRules');
const extensionRules = require('./rules/extensionRules');
const mochaRules = require('./rules/mochaRules');

module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'mocha'],
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module'
    },
    rules: Object.assign({},
        supportedRules,
        extensionRules,
        mochaRules
    )
};