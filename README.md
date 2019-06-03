<p align="center">
  <img src="./logo.png" width="150px" /> 
</p>

<p align="center">
  <a href="https://github.com/nos/dapp-starter-kit/releases">
    <img src="https://img.shields.io/github/tag/nos/dapp-starter-kit.svg?style=flat">
  </a>
  <a href='https://github.com/prettier/prettier'>
    <img src='https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat'>
  </a>
</p>

## Purpose
A to-do app which is decentrialized using nos client library (Based on NEO) 

In this repo you can find NEO specific tooling:
* nOS functions exposed in a store
* neon-js, providing extra NEO functionality

Used frameworks and tooling:
* React, our framework of choice
* JSS, CSS in JSS
* Jest, a testing framework
* Babel and Parcel, transpiling and compiling
* Prettier and ESLint, kickass linting support

Some plugins:
* vendor prefixing, camelCase and global styling JSS plugins
* env and React Babel presets
* babel-polyfill
* React and Prettier ESLint plugins

## Setup
```bash
$ git clone https://github.com/lienhongvu/decentralize-task-note.git
$ cd decentralize-task-note
$ yarn
$ yarn start
```

## Testing
Use `yarn test:local` or `npm run test:local` to run all tests locally. The `test` command is reserved for CI builds.

## Document structure
```
react-stack-boilerplate
├── src
│   ├── __helpers__
│   ├── __mocks__
│   ├── assets
│   ├── components
│   │   └── __tests__
│   │       └── __snapshots__
│   ├── nos
│   └── views
│       └── __tests__
│           └── __snapshots__
├── .babelrc
├── .eslintrc
├── .gitignore
├── CHANGELOG.md
├── jest.config.js
├── jest.setup.js
├── package.json
├── README.md
└── yarn.lock
```

