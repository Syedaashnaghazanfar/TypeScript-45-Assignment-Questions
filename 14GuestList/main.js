//If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var guestList = ["Fatima", "Mubashira", "Sara", "Hania"];
guestList.forEach(function (guests) { return console.log("Dear ".concat(guests, " you are invited over to Ashna's house for Sunday Night dinner!")); });
