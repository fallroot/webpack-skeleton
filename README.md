# Webpack Skeleton for JavaScript Library Development

This is a simple skeleton used when I make JavaScript library with ECMAScript 2015. Webpack is used for development convenience because of supporting [Babel](https://babeljs.io/), [Mocha](https://mochajs.org/) and default web server.

## Usage

### Getting Started

```
$ npm install
```

### Development

Add your test cases in `test/main.js` file or customize `test/webpack.config.js` file for your project. [Mocha](https://mochajs.org/) is used as test framework.

```
$ npm run test
$ open localhost:8080/bundle
```

### Production

Customize `webpack.config.js` file for production settings. Refer [Webpack official document about configuration](https://webpack.github.io/docs/configuration.html).

```
$ npm run build
```
