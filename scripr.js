fetch("https://pokeapi.co/api/v2/pokemon/ditto")
        .then(response => console.log(response))
        .cetch(error => console.error(error));