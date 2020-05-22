const argumentValue = process.argv[2];

const numberValue = Number(argumentValue);

let treeStatus = "";
if (numberValue == 0) {
    treeStatus = "alive";
} else {
    treeStatus = "other";
}
console.log(treeStatus);