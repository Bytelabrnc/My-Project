// primitive

// 7 types : string, Number, Boolean, null, undefined, symbol,BigInt

// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;
// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 34954809853405458288n

// Reference (Non primitive)

//Array, Objects, Functions, 

const heros = ["shaktiman", "naagraj", "doga"]

let myObj = {
    name: "hitesh",
    age : 22,

}

const myfunction = function(){
    console.log("hello world");
  
}

// console.log(typeof bigNumber);


//**************************

//stack (primitive), heap(Non-primitive)

let myyoutubename = "examatlasdotcom"
let anothername = myyoutubename
anothername = "chaiaurcode"

// console.log(myyoutubename);
// console.log(anothername);


let userOne = {
    email: "user@gmail.com",
    upi: "user@upi"
}

let userTwo = userOne

userTwo.email = "sujit@google.com"

console.log(userOne.email);
console.log(userTwo.email);
