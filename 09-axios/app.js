// const checkStatusAndParse = (response) => {
//     if (!response.ok)
//         throw new Error(` Status Code is ${response.status}`);
//     return response.json();
// }
// const printPeople = (data) => {
//     console.log('.............printing 10 people');
//     for (person of data.results) {
//         console.log(person.name);
//     }
//     return Promise.resolve(data.next);
// }
// const nextURL = (URL) => {
//     return fetch(URL);
// }

// const printPlanets = (data) => {
//     console.log('.............printing 10 planets');
    
//     for (planet of data.results) {
//         console.log(planet.name);
//     }
//     return Promise.resolve(data.next);
// }

// fetch('https://swapi.co/api/people/')
//     .then(checkStatusAndParse)
//     .then(printPeople)
//     .then(nextURL)
//     .then(checkStatusAndParse)
//     .then(printPeople)
//     .catch((err) => {
//         console.log('something whet wrong with FETCH');
//         console.log(err);
//     });

// fetch('https://swapi.co/api/planets/')
//     .then(checkStatusAndParse)
//     .then(printPlanets)
//     .catch((err) => {
//         console.log('something whet wrong with FETCH');
//         console.log(err);
//     });


// ------ AXIOS ------
// 1) pre parse
// 2) status error could catch

// axios
//     .get('https://swapi.co/api/planets/')
//     .then(res => {
//         console.log(res.data);
//     })
//     .catch(err => {
//         console.log(err);
//     });

// chained AXIOS

const fetchURL = (url) => {
    return axios.get(url);
};

const loadData = ({data}) => {
    for( item of data.results ) {
        console.log(item.name);
    }
    console.log(data.next);
    return Promise.resolve(data.next);
};
fetchURL('https://swapi.co/api/planets/')
    .then(loadData)
    .then(fetchURL)
    .then(loadData)
    .catch(err => {
        console.log(err);  
    });
