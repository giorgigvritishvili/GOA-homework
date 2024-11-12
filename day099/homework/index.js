class Car {
    constructor(make, model) {
        this.make = make;  // Public property
        this.model = model; 
    }
}

const myCar = new Car("Toyota", "Corolla");


class BankAccount {
    // Using a WeakMap to create a private property
    static #balanceMap = new WeakMap();

    constructor(initialBalance) {
        BankAccount.#balanceMap.set(this, initialBalance);
    }

    // Public method to deposit money
    deposit(amount) {
        if (amount > 0) {
            const balance = BankAccount.#balanceMap.get(this);
            BankAccount.#balanceMap.set(this, balance + amount);
            console.log(`Deposited: $${amount}. New balance: $${BankAccount.#balanceMap.get(this)}`);
        } else {
            console.log("Deposit amount must be positive.");
        }
    }

    // Public method to withdraw money
    withdraw(amount) {
        const balance = BankAccount.#balanceMap.get(this);
        if (amount > 0 && amount <= balance) {
            BankAccount.#balanceMap.set(this, balance - amount);
            console.log(`Withdrew: $${amount}. New balance: $${BankAccount.#balanceMap.get(this)}`);
        } else {
            console.log("Invalid withdrawal amount.");
        }
    }

    // Public method to check balance
    checkBalance() {
        console.log(`Current balance: $${BankAccount.#balanceMap.get(this)}`);
    }
}


class Mathoperation {
    constructor(firstnumber , secondnumber) {
        this.firstnumber = firstnumber;
        this.secondnumber = secondnumber;
    }
    static myCar() {
        return "mycar"

    }
}

const Car = new "ford";


class Math {
    constructor(width , height) {
        this.width = width;
        this.height = height;
        return width * height

    }
     
}