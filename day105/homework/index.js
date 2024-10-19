const myPromise = new Promise((resolve, reject) => {
    resolve("Hello, Promise!");
});

myPromise.then(message => {
    console.log(message);
});


const Promise = new Promise((resolve, reject) => {
    reject("Something went wrong!");
});

// Handling the rejection
myPromise.catch(error => {
    console.log(error); // Output: Something went wrong!
});

const yourPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("2 seconds have passed");
    }, 2000);
});

// Using the promise
myPromise.then(message => {
    console.log(message); // Output: 2 seconds have passed
});)