const autoCompleteConfig = {
  // how to actually fetch a data
  async fetchData(searchTerm) {
      const response = await axios.get('http://www.omdbapi.com/', {
        params: {
          apikey: 'f3ce12d',
          s: searchTerm
        }
      });
      if (response.data.Error) {
        return [];
      }
      return response.data.Search;
    },
    // how to show an indivisual item
    renderOption: (movie) => {
      const imgSrc = movie.Poster === 'N/A' ? 'https://fakeimg.pl/280x400/' : movie.Poster;
      return `
            <img src = "${imgSrc}" />
            <p> ${movie.Title}</p>
        `;
    },
    // what to do when clicks on one
    onOptionSelect(movie) {
      document.querySelector('.tutorial').classList.add('is-hidden');
      movieSelected(movie);
    },
    // what to kind of  backfill inside of the inputs after user clicks on one
    inputValue(movie) {
      return movie.Title;
    }
};


creatAutoComplete({
  ...autoCompleteConfig,
  //where to render
  root: document.querySelector('#left-autocomplete'),
  
});
creatAutoComplete({
  ...autoCompleteConfig,
  //where to render
  root: document.querySelector('#right-autocomplete'),

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