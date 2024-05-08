//alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
var alein_colour1 = "green";
if (alein_colour1) {
    console.log("You just earned 5 points!"); //if will run coz condition is true
}
else {
    console.log("You just earned 10 points!"); //this will not run
}
;
var alein_colour2 = "red";
if (alein_colour2 == "green") {
    console.log("You just earned 5 points!"); //this will not run
}
else {
    console.log("You just earned 10 points!"); //else will run acc to condition
}
;
