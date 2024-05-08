//Seeing the World: Think of at least five places in the world you’d like to visit.

let favouritePlaces = ["Makkah","Dubai","Paris","Turkey","Istanbul"];

//printing in normal order
console.log("For normal order",favouritePlaces);

//printing in alphabetical order without modifying list
console.log("For alphabetical order",[...favouritePlaces].sort());

//showing that list is in its normal condition
console.log("for your satisfaction that the list order hasnt changed",favouritePlaces);

//printing array in reverse alphabetical order
console.log("For reverse alphabetical order",[...favouritePlaces].reverse());

//showing that list is in its normal condition
console.log("for your satisfaction that the list order hasnt changed",favouritePlaces);

//changing the original order of list
console.log("Reversed the original list",favouritePlaces.reverse());

//reversing again for original order
console.log("reversing again",favouritePlaces.reverse());

//printing in alphabatical order again but now for the original list
console.log("Alphabetical order of original list",favouritePlaces.sort());

//original list sorted again again
console.log("Reversing the original list again",favouritePlaces.reverse());
