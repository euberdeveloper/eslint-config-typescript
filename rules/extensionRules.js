'use strict';

module.exports = {
    // Enforce consistent brace style for blocks. Fixable.
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/brace-style.md
    'brace-style': 'off',
    '@typescript-eslint/brace-style': ['warn', 'stroustrup'],

    // Require or disallow trailing comma. Fixable.
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/comma-dangle.md
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': ['warn', 'never'],

    // Enforces consistent spacing before and after commas. Fixable.
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/comma-spacing.md
    'comma-spacing': 'off',
    '@typescript-eslint/comma-spacing': ['warn'],

    // Enforce default parameters to be last.
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/default-param-last.md
    'default-param-last': 'off',
    '@typescript-eslint/default-param-last': ['warn'],

    // Enforce dot notation whenever possible. Fixable.
    'dot-notation': 'off',
    '@typescript-eslint/dot-notation': ['warn'],

    // Require or disallow spacing between function identifiers and their invocations. Fixable.
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/func-call-spacing.md
    'func-call-spacing': 'off',
    '@typescript-eslint/func-call-spacing': ['warn', 'never'],

    // Enforce consistent indentation. Fixable.
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/indent.md
    'indent': 'off',
    '@typescript-eslint/indent': ['warn', 4],

    // Require or disallow initialization in variable declarations
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/init-declarations.md
    // 'init-declarations': 'off',
    // '@typescript-eslint/init-declarations': ['warn'],

    // Enforce consistent spacing before and after keywords. Fixable.
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/keyword-spacing.md
    'keyword-spacing': 'off',
    '@typescript-eslint/keyword-spacing': ['warn'],

    // Require or disallow an empty line between class members. Fixable.
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/lines-between-class-members.md
    // 'lines-between-class-members': 'off',
    // '@typescript-eslint/lines-between-class-members': ['warn'],

    // Disallow generic Array constructors. Recommended. Fixable.
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-array-constructor.md
    'no-array-constructor': 'off',
    '@typescript-eslint/no-array-constructor': ['warn'],

    // Disallow duplicate class members.
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-dupe-class-members.md
    'no-dupe-class-members': 'off',
    '@typescript-eslint/no-dupe-class-members': ['warn'],

    // Disallow duplicate imports
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-duplicate-imports.md
    // 'no-duplicate-imports': 'off',
    // '@typescript-eslint/no-duplicate-imports': ['warn'],

    // Disallow empty functions. Recommended.
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-function.md
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': ['warn'],

    // Disallow unnecessary parentheses. Fixable.
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-parens.md
    // 'no-extra-parens': 'off',
    // '@typescript-eslint/no-extra-parens': ['warn'],

    // Disallow unnecessary semicolons. Recommended. Fixable.
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-semi.md
    'no-extra-semi': 'off',
    '@typescript-eslint/no-extra-semi': ['warn'],

    // Disallow this keywords outside of classes or class-like objects.
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-invalid-this.md
    'no-invalid-this': 'off',
    '@typescript-eslint/no-invalid-this': ['warn'],

    // Disallow function declarations that contain unsafe references inside loop statements
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-loop-func.md
    'no-loop-func': 'off',
    '@typescript-eslint/no-loop-func': ['warn'],

    // Disallow literal numbers that lose precision.
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-loss-of-precision.md
    'no-loss-of-precision': 'off',
    '@typescript-eslint/no-loss-of-precision': ['warn'],

    // Disallow magic numbers.
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-magic-numbers.md
    // 'no-magic-numbers': 'off',
    // '@typescript-eslint/no-magic-numbers': ['warn'],

    // Disallow variable redeclaration.
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-redeclare.md
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': ['warn'],

    // Disallow variable declarations from shadowing variables declared in the outer scope
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-shadow.md
    // 'no-shadow': 'off',
    // '@typescript-eslint/no-shadow': ['warn'],

    // Disallow unused expressions
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-expressions.md
    // 'no-unused-expressions': 'off',
    // '@typescript-eslint/no-unused-expressions': ['warn'],

    // Disallow unused variables. Recommended.
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['warn'],

    // Disallow the use of variables before they are defined
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['warn'],

    // Disallow unnecessary constructors
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-useless-constructor.md
    // 'no-useless-constructor': 'off',
    // '@typescript-eslint/no-useless-constructor': ['warn'],

    // Enforce the consistent use of either backticks, double, or single quotes. Fixable.
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/quotes.md
    'quotes': 'off',
    '@typescript-eslint/quotes': ['warn', 'single', { 'allowTemplateLiterals': true }],

    // Disallow async functions which have no await expression. Recommended.
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/require-await.md
    'require-await': 'off',
    '@typescript-eslint/require-await': ['warn'],

    // Enforces consistent returning of awaited values. Fixable.
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/return-await.md
    // 'no-return-await': 'off',
    // '@typescript-eslint/return-await': 'warn',

    // Require or disallow semicolons instead of ASI. Fixable.
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/semi.md
    'semi': 'off',
    '@typescript-eslint/semi': ['warn'],

    // Enforces consistent spacing before function parenthesis. Fixable.
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/space-before-function-paren.md
    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren': ['warn']
};