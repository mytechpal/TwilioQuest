const argumentValue = process.argv[2];

const numberValue = Number(argumentValue);

let treeStatus = "";
if (numberValue == 0) {
    treeStatus = "alive";
} else if (numberValue == 1) {
    treeStatus = "flowering";
} else if (numberValue == 2) {
    treeStatus = "shedding";
} else {
    treeStatus = "other";
}
console.log(treeStatus);