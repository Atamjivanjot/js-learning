const User = new Object()

User.id = "2323"
User.name =" dahl"
User.isLogIn = false

//console.log(User);

const regularUser={
    email: "someone@gmail.com",
    fullName:
    {
        userfullname:{
            firstName: "Jivan",
            lastName: "Kaur"
        }
    }
}

// console.log(regularUser.fullName.userfullname.firstName);

// console.log(regularUser.fullName?.userfullname.firstName);


const obj1 = { 
    1: "a", 2:"b"
}

const obj2 ={
    3: "a", 4: "b"
}

// const obj3 = {obj1, obj2}
// console.log(obj3);


//const obj3 =  Object.assign(obj1, obj2)
//const obj3 =  Object.assign({},obj1, obj2)
//console.log(obj3);


//USING SPREAD OPERATORS

// const obj3 = {...obj1, ...obj2}
// console.log(obj3);


// console.log(Object.keys(User)); // convert the obj into array QUITE USEFUL
// console.log(Object.values(User));
// console.log(Object.entries(User));

// console.log(User.hasOwnProperty('isLoggediN'));



