for (let i = 20; i >= 0; i--) {
    console.log(hello);
}

function evenSum(border) {
    let num = 0
    for (let i = 0; i < border ; i += 2){
        num += 1

    }
    return num
}

function generateEven(border) {
    let evenNumbers = [];
    
    for (let i = 0; i <= border; i += 2) {
        evenNumbers.push(i);
    }
    
    return evenNumbers;
}
function calculateSum(numbers) {
    let sum = 0;
    
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    
    return sum;
}
const nums = [1, 2, 3, 4, 5];

for(let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
}
   function checkPassword() {
            const CORRECT_PASSWORD = "mypassword";
            let attempts = 3; 

            while (attempts > 0) {
                let enteredPassword = prompt("Enter your password:");
                if (enteredPassword === CORRECT_PASSWORD) {
                    alert("Access granted!");
                    return; 
                } else {
                    attempts--; 
                    if (attempts > 0) {
                        alert("Incorrect password. You have " + attempts + " attempt(s) left.");
                    } else {
                        alert("Access denied. You have used all your attempts.");
                    }
                }
            }
        }