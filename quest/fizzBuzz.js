const numberValue = Number(process.argv[2]);

let printedValue;
if (numberValue % 3 === 0 && numberValue % 5 === 0) {
    printedValue = "JavaScript";
} else if (numberValue % 5 === 0) {
    printedValue = "Script";
} else if (numberValue % 3 === 0) {
    printedValue = "Java";
} else {
    printedValue = numberValue;
}

console.log(printedValue);