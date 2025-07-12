function add(a, b) {
    return a + b;
}
const firstARG = process.argv[2];
const secondARG = process.argv[3];
const num1 = parseInt(firstARG);
const num2 = parseInt(secondARG);
const result = add(num1, num2);
console.log(result);

