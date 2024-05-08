// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

function makeSandwiches (...items : string[]){
    console.log("Making sandwich with the following items :")

    items.forEach(singleiten => console.log(singleiten))

    console.log("Your sandwich is ready!\n");
}

//calling functions
makeSandwiches("Tomatoes","Egg","Cheese","Chicken","ketchup","Lettuce");

makeSandwiches("Chicken","Sauce","Onion","Spinach");

makeSandwiches("Butter","Bread");
