const firstArg = process.argv[2]; // Get the first user-provided argument
//attempt to convert the argument to an integer
const convertedNumber = parseInt(firstArg);
if (isNaN(convertedNumber)) {
    console.log("Not a number");
} else{
    console.log(`My number: ${convertedNumber}`);
}