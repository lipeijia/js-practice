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

const input = document.querySelector('input');

// fetch data is an async function, so whenever wa call
// fetch data it's going to take some amount of time to
// actually process tihs request.
// we have to treat it as though it were in async function.
const onInput =  async event => {
    const movies = await fetchData(event.target.value);

    for(movie of movies) {
        const div = document.createElement('div');

        div.innerHTML = `
            <img src = "${movie.Poster}" />
            <p> ${movie.Title}</p>
        `;

        document.querySelector('.content').appendChild(div);
    }
    
};

input.addEventListener('input', debounce(onInput, 500) );