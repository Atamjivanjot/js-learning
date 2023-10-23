const name = "jivan"
const repoCount = 6

//console.log(name+ repoCount + "values");

//String interplacation
console.log(`Hello my name is ${name} and mt repo count is ${repoCount}`);

// string declaration
const gameName = new String('jivan-jj');

console.log(gameName[0])
console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2))
console.log(gameName.indexOf('n'))

const newString = gameName.substring(0,4)
console.log(newString)


const anotherString = gameName.slice(-8,4)
console.log(anotherString)

const newStringOne = "   hitesh  "
console.log(newStringOne)
console.log(newStringOne.trim())