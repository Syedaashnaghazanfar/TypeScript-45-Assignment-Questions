//Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

let current_users = ["Sara","Ali","Zara","Maheen","Ashna","Ebad"];
let new_users     = ["Aliza","Osama","Wareesha","Ayesha","Ashna","Ali"];

new_users.forEach(newuser=>{
    
     let condition1 = current_users.some(currentuser => currentuser.toLowerCase() == newuser.toLowerCase());//some function is used to compare two values present in an array or variable
     if(condition1){
        console.log(`Sorry ${newuser} is already taken!`)
     }else{
        console.log(`This username ${newuser} is available!`)
     }
});
