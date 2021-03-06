// let timeoutId;
// const onInput = event => {
//     if (timeoutId) {
//         clearTimeout(timeoutId);
//     }
//     timeoutId = setTimeout( () => {
//         fetchData(event.target.value);
//     }, 500);
// }
// input.addEventListener('input', onInput);
// 
// ----- refact with debounce-----

const debounce = (func, delay = 1000) => {
    let timeoutId;
    return (...args) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            func.apply(null, args);
        }, delay);
    };
};