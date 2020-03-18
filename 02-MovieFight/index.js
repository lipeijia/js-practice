const fetchData = async (searchTerm) => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: 'f3ce12d',
            s: searchTerm
        }
    });
    // console.log(response);
    // Handling Errord Responses
    if (response.data.Error) {
        return [];
    }
    return response.data.Search;
};

// autocomplete.js
creatAutoComplete({
  root: document.querySelector('.autocompelete')
});
creatAutoComplete({
  root: document.querySelector('.autocompelete-2')
});
creatAutoComplete({
  root: document.querySelector('.autocompelete-3')
});

const movieSelected = async (movie) => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: 'f3ce12d',
            i: movie.imdbID
        }
    });
    console.log(response.data);
    document.querySelector('#summary').innerHTML = movieDetail(response.data);
    
};

const movieDetail = (movie) => {
    return `
    <article class="media">
      <figure class="media-left">
        <p class="image">
          <img src = "${movie.Poster}" >
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <h1>${movie.Title}</h1>
          <h4>${movie.Genre}</h4>
          <p>${movie.Plot}</p>
        </div>
      </div>
    </article>
    <article class="notification is-primary">
      <p class="title">${movie.Awards}</p>
      <p class="subtitle">Awards</p>
    </article>
    <article class="notification is-primary">
      <p class="title">${movie.BoxOffice}</p>
      <p class="subtitle">Box Office</p>
    </article>
    <article class="notification is-primary">
      <p class="title">${movie.Metascore}</p>
      <p class="subtitle">Metascore</p>
    </article>
    <article class="notification is-primary">
      <p class="title">${movie.imdbRating}</p>
      <p class="subtitle">IMDB Rating</p>
    </article>
    `
};