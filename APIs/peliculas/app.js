function mostrarPeliculas(url, containerId) {
    fetch(url, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '5a949e9e69msh3b55a9f9b99312fp1746f3jsn42bbbb800126',
            'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
        }
    })
    .then(response => response.json())
    .then(data => {
        const movies = data.d;

        movies.forEach(movie => {
            const title = movie.l;
            const image = movie.i.imageUrl;
            const cast = movie.s;
            const imdbUrl = `https://www.imdb.com/title/${movie.id}/`;

            const poster = `
                <div>
                    <a href="${imdbUrl}" target="_blank"><img src="${image}" /></a>
                    <h2>${title}</h2>
                    <small>${cast}</small>
                </div>            
            `;
            document.getElementById(containerId).innerHTML += poster;
        });
    })
    .catch(error => {
        console.error(error);
    });
}

// Mostrar películas de Avengers
mostrarPeliculas("https://imdb8.p.rapidapi.com/auto-complete?q=avengers", "avengers-container");

// Mostrar películas de Guardianes de la Galaxia
mostrarPeliculas("https://imdb8.p.rapidapi.com/auto-complete?q=guardianes%20de%20la%20galaxia", "guardians-container");

// Mostrar películas de X-Men
mostrarPeliculas("https://imdb8.p.rapidapi.com/auto-complete?q=x-men", "xmen-container");

// Mostrar películas de Stranger Things
mostrarPeliculas("https://imdb8.p.rapidapi.com/auto-complete?q=stranger%20things", "stranger-things-container");

// Mostrar películas de Star Wars
mostrarPeliculas("https://imdb8.p.rapidapi.com/auto-complete?q=starwars", "star-wars-container");
