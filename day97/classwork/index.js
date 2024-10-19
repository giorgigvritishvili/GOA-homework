<<<<<<< HEAD
class Account {
    constructor(firstName, lastName, email, password, city) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.city = city;
    }
 printDetails() {
        console.log("სახელი: " + this.firstName);
        console.log("გვარი: " + this.lastName);
        console.log("იმეილი: " + this.email);
        console.log("პაროლი: " + this.password);
        console.log("სახლური ქალაქი: " + this.city);
    }
}
const accounts = [];
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const city = document.getElementById("city").value;
    const newAccount = new Account(firstName, lastName, email, password, city);

 
    accounts.push(newAccount);
    newAccount.printDetails();
    document.getElementById("registrationForm").reset();
});
=======
class Account {
    constructor(firstName, lastName, email, password, city) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.city = city;
    }
 printDetails() {
        console.log("სახელი: " + this.firstName);
        console.log("გვარი: " + this.lastName);
        console.log("იმეილი: " + this.email);
        console.log("პაროლი: " + this.password);
        console.log("სახლური ქალაქი: " + this.city);
    }
}
const accounts = [];
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const city = document.getElementById("city").value;
    const newAccount = new Account(firstName, lastName, email, password, city);

 
    accounts.push(newAccount);
    newAccount.printDetails();
    document.getElementById("registrationForm").reset();
});
>>>>>>> e527c5236f3cd9407964202a860dcba7fed54f25
