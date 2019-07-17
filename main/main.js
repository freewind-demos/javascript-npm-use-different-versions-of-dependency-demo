const {hello} = require('javascript-npm-use-different-versions-of-dependency-demo--hello')
const {hello2} = require('javascript-npm-use-different-versions-of-dependency-demo--hello2')

hello('npm');
hello2('npm');

const _ = require('lodash');
console.log('Hello from main: ' + _.capitalize('npm'))
