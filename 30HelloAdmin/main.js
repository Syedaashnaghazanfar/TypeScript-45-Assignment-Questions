"use strict";
//Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
//• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
Object.defineProperty(exports, "__esModule", { value: true });
//• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
/*let userName = ["Ashna","Admin","Zaibi","Ali","Fatima","Sara"];
if(userName.includes('Admin')){
    console.log("Hello Admin, would you like to see a status report?");
}
if(userName.includes("Ashna")){
    console.log("Hello Ashna, thank you for logging in again");
}
if(userName.includes("Zaibi")){
    console.log("Hello Zaibi, thank you for logging in again");
}
if(userName.includes("Ali")){
    console.log("Hello Ali, thank you for logging in again");
}
if(userName.includes("Fatima")){
    console.log("Hello Fatima, thank you for logging in again");
}
if(userName.includes("Sara")){
    console.log("Hello Sara, thank you for logging in again");
};*/
//Or
let userName1 = ["Ashna", "Admin", "Zaibi", "Ali", "Fatima", "Sara"];
userName1.forEach(userAdmin => {
    if (userAdmin === "Admin") {
        console.log(`Hello ${userAdmin}, would you like to see a status report?`);
    }
    else {
        console.log(`Hello ${userAdmin}, thank you for logging in again.`);
    }
});
