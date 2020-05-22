const lifeStatus = Number(process.argv[2]);
const drynessLevel = Number(process.argv[3]);

let treeStatus;
if (lifeStatus == 0 && drynessLevel > 10) {
    console.log("WATER");
}