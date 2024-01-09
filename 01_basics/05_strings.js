const name = "Muhammad Anas"
const repoCount = 20

// console.log(name + repoCount + " Value"); this is old way

// Do like this

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Anas-AK')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf("a"));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-6, 4)
console.log(anotherString);

const newStringOne = "   Anas   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://anas.com/anas%229khalid"

console.log(url.replace('%229', '-'));

console.log(url.includes('anas'));

console.log(gameName.split('-'));