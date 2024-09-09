
document.getElementById('movie-search-form').addEventListener('submit', function(event) {
       event.preventDefault();
    
    const searchInput = document.getElementById('search-input').value;
    const apiKey = '2e075274';
    const apiUrl = `http://www.omdbapi.com/?s=${searchInput}&apikey=${apiKey}`;
    
    fetch(apiUrl)
          .then(response => response.json())
          .then(data => {
          if (data.Response === 'True') {
                displayMovies(data.Search);
             } else {
                displayError(data.Error);
        }
    })

    .catch(error => {
           console.error('Error fetching data:', error);
       });
    });
    
    function displayMovies(movies) {
         const imageContainer = document.querySelector('.image-container');
         imageContainer.innerHTML = '';
    
    movies.forEach(movie => {
         const movieDiv = document.createElement('div');
         movieDiv.classList.add('movie');
    
    movieDiv.innerHTML = `
         <img src="${movie.Poster !== 'N/A' ? movie.Poster : 'placeholder.jpg'}" alt="${movie.Title}">
         <h2>${movie.Title}</h2>
         <p>Year: ${movie.Year}</p>
         <button class="play-button" onclick="play('${movie.Title}')">Play</button>
    `;
    imageContainer.appendChild(movieDiv);
    });
    }
    
    function displayError(errorMessage) {
          const imageContainer = document.querySelector('.image-container');
          imageContainer.innerHTML = `<p class="error">${errorMessage}</p>`;
    }
    
    
    function play(movieTitle) {
          const youtubeSearchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(movieTitle)}+trailer`;
          window.open(youtubeSearchUrl, '_blank');
    }
    