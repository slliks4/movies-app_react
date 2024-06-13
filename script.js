const apiKey = 'ee2b37bc';

function searchMovies() {
    const searchQuery = document.getElementById('searchInput').value;

    if (searchQuery.trim() === '') {
        alert('Enter movie title');
        return;
    }

    const apiUrl = `https://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(searchQuery)}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.Response === "True") {
                displayMovies(data.Search);
                console.log(data.Search);
            } else {
                alert('Movie not found');
            }
        })
        .catch(error => {
            console.error('Error', error);
        });
}

function displayMovies(movies) {
    const movieResultsContainer = document.getElementById('movieResults');
    movieResultsContainer.innerHTML = '';

    movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.innerHTML = 
            `
                <div class="movieCard">
                    <div id="movieImgBlock">
                        <img src="${movie.Poster}" alt="${movie.Title}">
                    </div>
                    
                    <h2>${movie.Title}</h2>
                    <p>${movie.Year}</p>
                </div>
            `;

        movieResultsContainer.appendChild(movieElement);
    });
}