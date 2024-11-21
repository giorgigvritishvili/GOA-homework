const promise = fetch('https://jsonplaceholder.typicode.com/todos')
  promise

    .then((response) => console.log("fullfailed API data fetched",response))