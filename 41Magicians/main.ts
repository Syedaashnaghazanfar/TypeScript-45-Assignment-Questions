// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

//making function
function show_magicician( magicians: string[]){
    magicians.forEach(name=> console.log(name));
}
//making variable
let magiciansName = ["John","Harry","Frosar","Joseph"];

//calling magicians
show_magicician(magiciansName);