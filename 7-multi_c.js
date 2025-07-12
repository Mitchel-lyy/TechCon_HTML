const countArg = process.argv[2];
const numOccurences = parseInt(countArg);
if (isNaN(numOccurences)|| numOccurences <= 0) {
    console.log("Missing number of occurences");
} else {
    for (let i = 0; i < numOccurences; i++) {
        console.log("C is fun");
    }
}
