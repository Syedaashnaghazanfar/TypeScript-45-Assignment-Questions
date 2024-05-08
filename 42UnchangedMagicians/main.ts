//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

let magiciansName : string[] = ["John","Harry","Joseph","Edward"];

function copyArray( array : string[]){
    return [...array] //by putting three dots before the variable we can make copy of it
}
function make_great(magicians :string[]){
    for( let i=0; i<magicians.length; i++ ){
        magicians[i]= "The Great " + magicians[i];
    }
}
function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}

//calling functions
let newFunction = copyArray(magiciansName);//putting in variable so we can call it further
make_great(newFunction);
//original message
console.log("This is original array")
show_magicians(magiciansName);
//modified message
console.log("This is modified array")
show_magicians(newFunction);