'use strict';

const supportedRules = require('./rules/supportedRules');
const extensionRules = require('./rules/extensionRules');

module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    rules: Object.assign({},
        supportedRules,
        extensionRules
    )
};