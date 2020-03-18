const creatAutoComplete = ({
        root
    }) => {

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
    const input = root.querySelector('input');
    const dropdown = root.querySelector('.dropdown');
    const resultsWrapper = root.querySelector('.results');

    const onInput = async event => {
        const movies = await fetchData(event.target.value);
        // Handling Empty Responses
        if (!movies.length) {
            dropdown.classList.remove('is-active');
            return;
        }
        // clear search results
        resultsWrapper.innerHTML = '';

        // HTML Generation - options
        dropdown.classList.add('is-active');
        for (let movie of movies) {
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

    input.addEventListener('input', debounce(onInput, 500));

    // Automatically Closing The Dropdown
    document.addEventListener('click', event => {
        // console.log(event.target);
        if (!root.contains(event.target)) {
            dropdown.classList.remove('is-active');
        }
    });
};