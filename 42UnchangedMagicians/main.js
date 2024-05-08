//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var magiciansName = ["John", "Harry", "Joseph", "Edward"];
function copyArray(array) {
    return __spreadArray([], array, true); //by putting three dots before the variable we can make copy of it
}
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "The Great " + magicians[i];
    }
}
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//calling functions
var newFunction = copyArray(magiciansName); //putting in variable so we can call it further
make_great(newFunction);
//original message
console.log("This is original array");
show_magicians(magiciansName);
//modified message
console.log("This is modified array");
show_magicians(newFunction);
