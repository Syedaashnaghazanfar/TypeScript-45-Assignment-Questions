//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

//• Tests for equality and inequality with strings
//for equality
let furniture = 'Wood';
console.log("is furniture is equal to wood?");
console.log(furniture == "Wood");//for true

//for inequality
console.log('is furniture not equal to wood?');
console.log(furniture != "Wood");//for false

//• Tests using the lower case function
let transport ="AEROPLANE";
console.log("is transport i.e AEROPLANE is equal to aeroplane after using lowercase function?");
console.log(transport.toLowerCase() == "aeroplane");//for true

console.log("is transport i.e AEROPLANE is equal to AEROPLANE after using lowercase function?");
console.log(transport.toLowerCase() == "AEROPLANE");//for false


//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//for equality
let ten= '10';
console.log("is ten is equal to 10?");
console.log(ten== "10");//for true

//for inequality
console.log('is 10 not equal to 10?');
console.log(ten != "10");//for false

let a = "10";
let b = "15";
//for greater than
console.log("is ten greater then twenty?");
console.log(a > b);//false

//for less than
console.log("is ten less then twenty?");
console.log(a < b);//true

//for equal to
console.log("is ten equal to twenty?");
console.log(a == b);//false

//for greater than or equal to
console.log("is ten greater then or equal to twenty?")
console.log(a >= b);//false

// for less than or equal to
console.log("is ten less then or equal to twenty?")
console.log(a <= b);//false

//using and / or operators
//for and
console.log("is ten less then twenty and is twenty greater then ten?");
let logicaland = (a < b) && ( b > a);
console.log(logicaland);//true

//for or
console.log("is ten less then twenty or is twenty greater then ten?");
let logicalor = (a < b) || ( b > a);
console.log(logicalor);//true

//iten is array or not  [inculudes fucntion is used when we need to find out something is present or not]
let array1= ["ashna","ghazanfar","ali"];
console.log("whether the name (ghazanfar) is array or not?");
console.log(array1.includes("ghazanfar"));//true

let array2 = ["Spaghettii","Macroni","Lasangne"];
console.log("Whether Pasta is in array2 or not?");
console.log(array2.includes("Pasta"));//false









