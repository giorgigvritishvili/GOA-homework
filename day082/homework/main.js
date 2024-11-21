// შექმენით ფუნქცია რომელსაც გადაეცემა 2 რიცხვი, start - end, თქვენი მოვალეობაა ამ რიცხვებს შორის ყველა რიცხვის გაგება და მასივში შეტანა, საბოლოოდ დააბრუნეთ მასივი

function rangeToArray(start, end) {
    const result = [];
    for (let i = start; i <= end; i++) {
        result.push(i);
    }
    return result;
}

const start = 5;
const end = 10;
const result = rangeToArray(start, end);
console.log(result);