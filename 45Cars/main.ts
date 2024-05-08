// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly

function create_car(manufacturer :string , model :string, ...options){
    let car ={
         manufacturer : manufacturer,
         model : model
    }
   options.forEach(options=> {
    let[key , value] = options.split(":");
    car[key.trim()] = value.trim();
});
    return car;
}

let myCar = create_car("Toyota","Corolla","Colour : Black","Sunroof : true");
console.log(myCar);
