//Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

let petAnimals = ["Cat","Dog","Cow"];
for( let oneAnimal of petAnimals){ //creating variable to store values one by one
    if(oneAnimal == "Cat"){
        console.log("  Cats allows angels to enter our house");
    }
    if(oneAnimal == "Dog"){
        console.log("  Dogs can detect any suspious activity happening around it");
    }
    if(oneAnimal == "Cow"){
        console.log("  Cows give us fresh milk");
    }
}
console.log("All these animals are goot pets and give lots of benefit to us");