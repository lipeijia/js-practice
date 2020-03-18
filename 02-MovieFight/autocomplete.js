const creatAutoComplete = ({
    root,
    renderOption,
    onOptionSelect,
    inputValue,
    fetchData
}) => {

    root.innerHTML = `
        <div>
        <label><b>Search</b></label>
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
    // user typo somthing, fetch data
    const onInput = async (event) => {
        // input's value
        const items = await fetchData(event.target.value);
        // if no item matches, no dropdown menu
        if (!items.length) {
            dropdown.classList.remove('is-active');
            return;
        }
        // empty search result
        resultsWrapper.innerHTML = '';

        // search options generate
        dropdown.classList.add('is-active');
        for (let item of items) {

            const option = document.createElement('a');

            option.classList.add('dropdown-item');
            // generate contents
            option.innerHTML = renderOption(item);
            // add item clicked interation
            option.addEventListener('click', () => {
                // close dropdown menu
                dropdown.classList.remove('is-active');
                // update input's value == clicked item's value
                input.value = inputValue(item);
                // fetch another full item's data.
                onOptionSelect(item);
            });
            // show full item's content
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