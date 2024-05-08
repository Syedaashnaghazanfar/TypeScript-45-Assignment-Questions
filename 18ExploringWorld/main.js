//Seeing the World: Think of at least five places in the world you’d like to visit.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var favouritePlaces = ["Makkah", "Dubai", "Paris", "Turkey", "Istanbul"];
//printing in normal order
console.log("For normal order", favouritePlaces);
//printing in alphabetical order without modifying list
console.log("For alphabetical order", __spreadArray([], favouritePlaces, true).sort());
//showing that list is in its normal condition
console.log("for your satisfaction that the list order hasnt changed", favouritePlaces);
//printing array in reverse alphabetical order
console.log("For reverse alphabetical order", __spreadArray([], favouritePlaces, true).reverse());
//showing that list is in its normal condition
console.log("for your satisfaction that the list order hasnt changed", favouritePlaces);
//changing the original order of list
console.log("Reversed the original list", favouritePlaces.reverse());
//reversing again for original order
console.log("reversing again", favouritePlaces.reverse());
//printing in alphabatical order again but now for the original list
console.log("Alphabetical order of original list", favouritePlaces.sort());
//original list sorted again again
console.log("Reversing the original list again", favouritePlaces.reverse());
