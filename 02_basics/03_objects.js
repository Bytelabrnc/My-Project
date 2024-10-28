// singleton

// object Literals

const mysym = Symbol("key1")

const jsUser = {
    name: "Sujit",
    "Full Name": "Sujit Singh",    
    [mysym]: "mykey1",
    age: 30,
    location: "Ranchi",
    email: "Sujit@examatlas.com",
    isLoggedIn: false,
    lastlogindays: ["Monday","Saturday"]

}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["Full Name"]);
// console.log(jsUser[mysym]);

jsUser.email = "sujit@bytelab.in"
//Object.freeze(jsUser)
jsUser.email = "sujit@microsoft.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello Java Script user");
    
}

jsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this["Full Name"]}`);
    
    
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
