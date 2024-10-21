const name = "sujit"
const repoCount = 50

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Byte-lab-ranchi')

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());

console.log(gameName.charAt(10));

console.log(gameName.indexOf('i'));

// const newString = gameName.substring(0,7)
// console.log(newString);

const anotherString = gameName.slice(-2, 4)
console.log(anotherString);


const newStringOne = "  Sujit "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://bytelab.in/services%20home"
console.log(url.replace('%20', '-'));

console.log(url.includes('servicess'));

console.log(gameName.split('-'));

