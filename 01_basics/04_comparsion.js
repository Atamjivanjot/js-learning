// console.log(2 > 1);
// console.log(2>=1);
// console.log(2< 1);
// console.log(2 == 1);
// console.log(2 != 1);


console.log("2" > 1);

//this is wrong way to compare avoid this
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

//the reason is that an equality check == and comaprsion > < >= <= work differently.
// Comparions convert null to a number treating it as 0. That's why null >= 0 is true and null > 0 is false

// this is wrong wa to compare. avoid this...
console.log(undefined == 0);
console.log(undefined == 0);
console.log(undefined >= 0);



//=== strict check
console.log("2" === 2);


