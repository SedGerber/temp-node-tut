// CommonJS (library), every file is a module by default
// Modules - Encapsulated Code
const {john, peter} = require('./4-names');
const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor')
require('./7-mind-grenade')


sayHi("Sedrin")
sayHi(john)
sayHi(peter) 

sayHi(names.john)
sayHi(names.peter)

console.log(data)