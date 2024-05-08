//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
var guestList = ["Fatima", "Mubashira", "Sara", "Hania"];
var cannotCome = guestList[0];
console.log("as ".concat(cannotCome, " is not coming for dinner"));
guestList.splice(0, 1, "Abeer");
guestList.forEach(function (guests) { return console.log("Dear ".concat(guests, " would you guys like to come over to my house for dinner?")); });
