let d = new Date()
//console.log(d);
//console.log(d.toString());


// console.log(d.toDateString());
// console.log(d.toLocaleString());
// console.log(typeof(d));

let myCreateDate = new Date(2023,0,23)
//console.log(myCreateDate.toString()); 
// months begin from 0 in js

let myDate = new Date("2023-01-14")
//console.log(myDate.toLocaleString());


let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
//console.log(Math.floor(Date.now()/1000))


let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth());
// console.log(newDate.getMonth() + 1);


newDate.toLocaleString('default',{
    weekday: "long"
})