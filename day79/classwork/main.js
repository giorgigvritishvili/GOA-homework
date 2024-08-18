function performOperation() {
    const num1 = parseFloat(prompt('Enter the first number:'));
    const num2 = parseFloat(prompt('Enter the second number:'));
     if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('click').innerText = 'Please enter valid numbers.';
        return;
    }
     const sum = num1 + num2;
    document.getElementById('result').innerText = `The sum of ${num1} and ${num2} is ${sum}.`;
}