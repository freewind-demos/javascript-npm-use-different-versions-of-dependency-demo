const _ = require('lodash');

function hello2(name) {
  console.log(`Hello, ${_.capitalize(name)}!`)
}

module.exports = {
  hello2
}
