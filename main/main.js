const {hello} = require('javascript-npm-use-different-versions-of-dependency-demo--hello')

hello('npm');

const _ = require('lodash');
console.log('Hello from main: ' + _.capitalize('npm'))
