const fetchData = async (searchTerm) => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: 'f3ce12d',
            s: searchTerm
        }
    });
    console.log(response);
    // Handling Errord Responses
    if (response.data.Error) {
        return [];
    }
    return response.data.Search;
};

// HTML Generation - root
const root = document.querySelector('.autocompelete');
root.innerHTML = `
<label> search
for a movie </label>
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
    // Handling Empty Responses
    if (!movies.length) {
        dropdown.classList.remove('is-active');
        return;
    }
    // clear search results
    resultsWrapper.innerHTML='';
    // HTML Generation - options
    dropdown.classList.add('is-active');
    for(movie of movies) {
        const option = document.createElement('a');
        // Handling Broken Images
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

// Automatically Closing The Dropdown
document.addEventListener('click', event => {
    // console.log(event.target);
    if (!root.contains(event.target)) {
        dropdown.classList.remove('is-active');
    }
});