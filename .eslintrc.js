module.exports = {
    env: {
        commonjs: true,
        es6: true,
        node: true,
        mocha: true,
    },
    extends: [
        // 'airbnb-base',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaVersion: 2018,
    },
    rules: {
        'indent': 'off',
        'no-plusplus': 'off',
        'no-unused-vars': 'off',
        'no-trailing-spaces': 'off',
        // 'space-in-parens': ["error", "always"],
    },
};