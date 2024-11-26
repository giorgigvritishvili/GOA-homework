
// 8 დავალება

const setA = new Set([1, 2, 3, 4, 5]);
const setB = new Set([4, 5, 6, 7, 8]);

const findCommonElements = (set1, set2) => {
    return new Set([...set1].filter(element => set2.has(element)));
};

const commonElements = findCommonElements(setA, setB);
console.log(":", Array.from(commonElements));


const athleteScores = new Map();
athleteScores.set("giorgi", 23);
athleteScores.set("luka", 8);
athleteScores.set("Saba", 23);
athleteScores.set("Simone Biles", 7);

const athleteToRemove = "Usain Bolt";
athleteScores.delete(athleteToRemove);


if (!athleteScores.has(athleteToRemove)) {
    console.log(`${athleteToRemove} has been removed from the list.`);
} else {
    console.log(`${athleteToRemove} is still in the list.`);
}

// გამოიტანეთ დარჩენილი სპორტსმენები
console.log("Remaining athletes:", Array.from(athleteScores.keys()));