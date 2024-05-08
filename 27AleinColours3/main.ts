// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.

// • If the alien is yellow, print a message that the player earned 10 points.

// • If the alien is red, print a message that the player earned 15 points.

let alein1 = "green";
if (alein1 == "green"){
    console.log("You shot a green alein1 you just earned 5 points!")//this will run as it satisfy the condition
}
else if(alein1 == "yellow"){
    console.log("You shot a yellow alein1 you just earned 10 points!")//this will not run
}
else if(alein1 == "red"){
     console.log("You shot a red alein1 you just earned 15 points!")//this will not run
};
//note:"else akhir mei nhi use kren ge wrna error ayega (personal experience)"

//condition 2
let alein2 = "yellow";
if (alein2 == "green"){
    console.log("You shot a green alein2 you just earned 5 points!")//this will not run
}
else if(alein2 == "yellow"){
    console.log("You shot a yellow alein2 you just earned 10 points!")//this will run
}
else if(alein2 == "red"){
    console.log("You shot a red alein2 you just earned 15 points!")//this will not run
};


//condition 3
let alein3 = "red";
if (alein3 == "green"){
    console.log("You shot a green alein3 you just earned 5 points!")//this wont run
}
else if(alein3 == "yellow"){
    console.log("You shot a yellow alein3 you just earned 10 points!")//this wont run
}
else if(alein3 == "red"){
    console.log("You shot a red alein3 you just earned 15 points!")//this will run
};