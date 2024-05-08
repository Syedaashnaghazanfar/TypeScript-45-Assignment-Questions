//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

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


//just foung out table not arriving on time

console.log('guys the table is not arriving on time, I can only invite two people now');

while(guestList.length > 2){
    let removeGuest = guestList.pop();
    console.log(`Sorry,${removeGuest} i cant invite you to dinner`);//removed all guests execpt two
}

console.log('Two people are still invited!');

//inviting remaining people
guestList.forEach
(updatedguests=> console.log(`Dear ${updatedguests} would you guys like to come over to my house for dinner?`));

//removing all guests

guestList.pop();
guestList.pop();

console.log("empty list:", guestList);

