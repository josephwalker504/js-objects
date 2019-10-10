console.log("Maybe I'm getting it");

const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}


// Lightning Exercises 1: Use dot notation to output all of the 
// dimensions of the Empire State Building to the console.

console.log(empireStateBuilding.stories);
console.log(empireStateBuilding.height);
console.log(empireStateBuilding.squareFeet);
console.log(empireStateBuilding.eastWestLength);
console.log(empireStateBuilding.northSouthLength);

// Lightning Exercises 2: Use square bracket notation to output the 
// remaining 5 properties to the console. Create 5 variables first with 
// the keys as their values. Use those variables to look up the values.

const empireAddress = "address";
const constructionDateYear = "constructionDate";
const costCost ="cost";
const ownerOwner = "owner";
const architectArchitect = "architect";

const empireStateBuildingAddress = empireStateBuilding[empireAddress]
console.log(empireStateBuildingAddress);

const empireStateBuildingConstruction = empireStateBuilding[constructionDateYear]
console.log(empireStateBuildingConstruction);

const empireStateBuildingCost = empireStateBuilding[costCost]
console.log(empireStateBuildingCost);

const empireStateBuildingOwner = empireStateBuilding[ownerOwner]
console.log(empireStateBuildingOwner);

const empireStateBuildingArchitect = empireStateBuilding[architectArchitect]
console.log(empireStateBuildingArchitect);
