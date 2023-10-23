//const myArr = [0,1,2,3,4,5, true]
const myArr = [0,1,2,3,4,5]

//console.log(myArr[0]);
//shallow copy: share same reference

const flowers =["marigold", "rose"]
//console.log(flowers);

//Array Methods

myArr.push(6)
myArr.pop()
//console.log(myArr);


myArr.unshift(9);
myArr.shift();
//console.log(myArr);


// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));


const newArr = myArr.join();
console.log(newArr);


//slice, splice
console.log("A", myArr)

const myn1 = myArr.slice(1,3)
console.log(myn1);

const myn2 = myArr.splice(1,3)
console.log(myn2);

//Note
/* splice is the one who manipulates the original and slice is one which just work on the copy of the array */


