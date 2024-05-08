// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
var magiciansName = ["John", "Harry", "Frosar", "Joseph"];
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magiciansName[i] = " The Great " + magicians[i];
    }
}
function show_magicician(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
make_great(magiciansName);
show_magicician(magiciansName);
