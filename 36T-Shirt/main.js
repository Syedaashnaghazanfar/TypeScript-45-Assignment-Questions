//T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
function make_shirt(size, printMessage) {
    if (size === void 0) { size = ""; }
    if (printMessage === void 0) { printMessage = ""; }
    console.log("The size of the shirt is ".concat(size, " and the message printed on the shirt is ").concat(printMessage));
}
;
make_shirt("Medium", "I Love My Mom!"); //try modifying this by large size and love dad message
make_shirt("small", "Ashna Ali");
