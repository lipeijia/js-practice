const fetchData = async (searchTerm) => {
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
};
const root = document.querySelector('.autocompelete');
root.innerHTML = `

<div class = "dropdown">
  <div class = "dropdown-trigger">
    <input class = "input" type = "text" >
    <div class = "dropdown-menu">
      <div class = "dropdown-content results">
      </div>
    </div>
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
    // clear search results
    resultsWrapper.innerHTML='';
    dropdown.classList.add('is-active');
    for(movie of movies) {
        const option = document.createElement('a');
        const imgSrc = movie.Poster === 'N/A' ? 'https://fakeimg.pl/280x400/' : movie.Poster;
        option.classList.add('dropdown-item');
        option.innerHTML = `
            <img src = "${imgSrc}" />
            <p> ${movie.Title}</p>
        `;

        resultsWrapper.appendChild(option);
    }
    
};

input.addEventListener('input', debounce(onInput, 500) );