//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I Love TypeScript"; }
    console.log("the size of shirt is ".concat(size, " and the message printed on shirt is ").concat(message));
}
make_shirt();
make_shirt("Medium");
make_shirt("Small", "You Are Hero!");
