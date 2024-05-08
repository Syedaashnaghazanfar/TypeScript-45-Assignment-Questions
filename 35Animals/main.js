//Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
var petAnimals = ["Cat", "Dog", "Cow"];
for (var _i = 0, petAnimals_1 = petAnimals; _i < petAnimals_1.length; _i++) {
    var oneAnimal = petAnimals_1[_i];
    if (oneAnimal == "Cat") {
        console.log("  Cats allows angels to enter our house");
    }
    if (oneAnimal == "Dog") {
        console.log("  Dogs can detect any suspious activity happening around it");
    }
    if (oneAnimal == "Cow") {
        console.log("  Cows give us fresh milk");
    }
}
console.log("All these animals are goot pets and give lots of benefit to us");
