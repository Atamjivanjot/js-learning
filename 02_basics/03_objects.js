//singleton
//whenever we declare through literals no singleton
//whenever declared through constructor the singleton

//there are 2 ways to make objects
//constructor way 
//Object.create


//object literals 
//key and value pair can have any datatype 

const mySyn = Symbol("key1")
const JsUser = {
    name: "jivan",
    age: 21,
    [mySyn]: "mykey",
    location:"kdssdddd",
    email:"hfdd@mail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday"]
}


// console.log(JsUser.email);
// console.log(JsUser["email"]); // the key is treated as string so used this way
// console.log(JsUser[mySyn])


// JsUser.email = "fghfdhj@mail.com"
// Object.freeze(JsUser);
// //freeze the object for further manipulation
// JsUser.email ="fhgujgk@gmail.com"
// console.log(JsUser);


JsUser.greeting1 = function()
{
    console.log(`hi there, ${this.name}`);
}


JsUser.greeting2 = function()
{
    console.log(`hi there`);
}

console.log(JsUser.greeting1);
console.log(JsUser.greeting1());
console.log(JsUser.greeting2());
