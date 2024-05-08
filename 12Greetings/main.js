//reapeting ex 11,but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
var names = ["Fatima", "Yusra", "Aasia", "Lamia"];
for (var i = 0; i < names.length; i++) {
    console.log("You are invited to Ashna Ghazanfar's birthday party miss ".concat(names[i]));
}
