//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
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
//removing the last two names
guestList.pop();
guestList.pop();
console.log("empty list", guestList);
