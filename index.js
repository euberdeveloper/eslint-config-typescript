'use strict';

const supportedRules = require('./rules/supportedRules');
const extensionRules = require('./rules/extensionRules');

module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'prettier'],
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module'
    },
    rules: Object.assign({},
        supportedRules,
        extensionRules
    ),
    extends: [
        'plugin:prettier/recommended'
    ]
};