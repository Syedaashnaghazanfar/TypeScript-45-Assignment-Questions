//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

let guestList = ["Fatima","Mubashira","Sara","Hania"];

let cannotCome = guestList[0];//for not coming people,fatima removed

console.log(`as ${cannotCome} is not coming for dinner`);//fatima not comming

guestList.splice(0,1,"Abeer");//0 pr abeer dali aur 1 pr se fatima ko nikala

guestList.forEach(guests=>console.log(`Dear ${guests} would you guys like to come over to my house for dinner?`));

//as i got new table so im modifying the list
console.log("I have arranged a new bigger dining table!");

guestList.unshift("Hareem");//unshift mei sabse pehle aye ga new name

guestList.push("Yusra");//push mei bad mei aye ga new name

let middleIndex = Math.floor(guestList.length / 2);//math floor function for roundoff value if odd,for middle 

guestList.splice(middleIndex,0, "Aasia");//middle index pr aasia ko dala aur 0 pr se koi nhi nikla

guestList.forEach(newguests=>console.log(`Dear ${newguests} would you guys like to come over to my house for dinner?`));










