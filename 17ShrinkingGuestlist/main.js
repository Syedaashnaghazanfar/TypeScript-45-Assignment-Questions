//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
var guestList = ["Fatima", "Mubashira", "Sara", "Hania"];
var cannotCome = guestList[0]; //for not coming people,fatima removed
console.log("as ".concat(cannotCome, " is not coming for dinner")); //fatima not comming
guestList.splice(0, 1, "Abeer"); //0 pr abeer dali aur 1 pr se fatima ko nikala
guestList.forEach(function (guests) { return console.log("Dear ".concat(guests, " would you guys like to come over to my house for dinner?")); });
//as i got new table so im modifying the list
console.log("I have arranged a new bigger dining table!");
guestList.unshift("Hareem"); //unshift mei sabse pehle aye ga new name
guestList.push("Yusra"); //push mei bad mei aye ga new name
var middleIndex = Math.floor(guestList.length / 2); //math floor function for roundoff value if odd,for middle 
guestList.splice(middleIndex, 0, "Aasia"); //middle index pr aasia ko dala aur 0 pr se koi nhi nikla
guestList.forEach(function (newguests) { return console.log("Dear ".concat(newguests, " would you guys like to come over to my house for dinner?")); });
//just foung out table not arriving on time
console.log('guys the table is not arriving on time, I can only invite two people now');
while (guestList.length > 2) {
    var removeGuest = guestList.pop();
    console.log("Sorry,".concat(removeGuest, " i cant invite you to dinner")); //removed all guests execpt two
}
console.log('Two people are still invited!');
//inviting remaining people
guestList.forEach(function (updatedguests) { return console.log("Dear ".concat(updatedguests, " would you guys like to come over to my house for dinner?")); });
//removing all guests
guestList.pop();
guestList.pop();
console.log("empty list:", guestList);
