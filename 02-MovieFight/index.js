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

// HTML Generation - root
const root = document.querySelector('.autocompelete');
root.innerHTML = `
<div>
<label><b> search for a movie </b></label>
<input class = "input" />
</div>
<div class = "dropdown">
    <div class = "dropdown-menu">
      <div class = "dropdown-content results"></div>
  </div>
</div>
`;
const input = document.querySelector('input');
const dropdown = document.querySelector('.dropdown');
const resultsWrapper = document.querySelector('.results');

// fetch data is an async function, so whenever wa call
// fetch data it's going to take some amount of time to
// actually process tihs request.
// we have to treat it as though it were in async function.
const onInput =  async event => {
    const movies = await fetchData(event.target.value);
    // Handling Empty Responses
    if (!movies.length) {
        dropdown.classList.remove('is-active');
        return;
    }
    // clear search results
    resultsWrapper.innerHTML='';

    // HTML Generation - options
    dropdown.classList.add('is-active');
    for( let movie of movies) {
        const option = document.createElement('a');
        // Handling Broken Images
        const imgSrc = movie.Poster === 'N/A' ? 'https://fakeimg.pl/280x400/' : movie.Poster;
        
        option.classList.add('dropdown-item');
        option.innerHTML = `
            <img src = "${imgSrc}" />
            <p> ${movie.Title}</p>
        `;
        option.addEventListener('click', () => {
            // close options
            dropdown.classList.remove('is-active');
            // update it to the title of the movie that user clicked on
            input.value = movie.Title;
            movieSelected(movie);
            
        });
        resultsWrapper.appendChild(option);
    }
    
};

input.addEventListener('input', debounce(onInput, 500) );

// Automatically Closing The Dropdown
document.addEventListener('click', event => {
    // console.log(event.target);
    if (!root.contains(event.target)) {
        dropdown.classList.remove('is-active');
    }
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