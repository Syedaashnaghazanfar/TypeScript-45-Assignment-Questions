//City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
function city_country(city, country) {
    if (city === void 0) { city = ""; }
    if (country === void 0) { country = ""; }
    return "\"".concat(city, ", ").concat(country, "\"");
}
//by just calling it will not run it will only save the value
console.log(city_country("Karachi", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("Istanbul", "Turkey"));
