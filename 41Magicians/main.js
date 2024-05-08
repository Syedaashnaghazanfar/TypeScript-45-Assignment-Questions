// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
//making function
function show_magicician(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//making variable
var magiciansName = ["John", "Harry", "Frosar", "Joseph"];
//calling magicians
show_magicician(magiciansName);
