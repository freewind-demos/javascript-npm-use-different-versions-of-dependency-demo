const _ = require('lodash');

function hello(name) {
  console.log(`Hello, ${_.capitalize(name)}!`)
}

module.exports = {
  hello
}
