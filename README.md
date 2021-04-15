# @euberdeveloper/eslint-config-typescript

My personal eslint configuration when used with Typescript.

## Brief description

An eslint configuration, that uses the standard `@typescript-eslint/eslint-plugin` for the Typescript rules and
`eslint-plugin-prettier` in order to connect with prettier.

## How to use it

### Install the dependencies:

```bash
# eslint with the typescript configuration
npm i -D eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser

# prettier with its eslint connector
npm i -D prettier eslint-plugin-prettier eslint-config-prettier

# this eslint configuration
npm i -D @euberdeveloper/eslint-config-typescript
```

### Add this `.prettierrc.js` file to your root:

```js
module.exports = {
    tabWidth: 4,
    singleQuote: true,
    quoteProps: 'consistent',
    trailingComma: 'none',
    arrowParens: 'avoid',
    printWidth: 120,
    endOfLine: 'auto'
};
```

### Add this `.eslintrc.js` file to your root:

```js
const path = require('path');

module.exports = {
    parserOptions: {
        project: path.join(__dirname, 'tsconfig.json') // The path to your tsconfig.json
    },
    extends: [ '@euberdeveloper/typescript' ]
};
```

### Now you can just use eslint to lint your code

You can also add some scripts to the `package.json` in order to have it always ready.
