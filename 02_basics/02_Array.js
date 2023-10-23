const flowers = ['marigold', 'rose', 'lotus']
const nuts = ["cashews", "almonds", "groundnuts"]

//flowers.push(nuts);
//console.log(flowers[3][1]);

//const wonders = flowers.concat(nuts)

//console.log(wonders);

//spread operator
// const wonders1 = [...flowers, ...nuts]
// console.log(wonders1);



const array1 = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const array3 = array1.flat(Infinity)
// console.log(array3);

// console.log(Array.isArray("djd"));
// console.log(Array.from("djd"));
// console.log(Array.from({name: 'hitesh'})) //interesting


let score1 = 100
let score2 = 200
let score3 = 455

console.log(Array.of(score1, score2, score3));