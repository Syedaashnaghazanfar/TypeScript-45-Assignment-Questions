//Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
var current_users = ["Sara", "Ali", "Zara", "Maheen", "Ashna", "Ebad"];
var new_users = ["Aliza", "Osama", "Wareesha", "Ayesha", "Ashna", "Ali"];
new_users.forEach(function (newuser) {
    var condition1 = current_users.some(function (currentuser) { return currentuser.toLowerCase() == newuser.toLowerCase(); });
    if (condition1) {
        console.log("Sorry ".concat(newuser, " is already taken!"));
    }
    else {
        console.log("This username ".concat(newuser, " is available!"));
    }
});
