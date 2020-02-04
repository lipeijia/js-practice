// fetch('https://swapi.co/api/people/')
//     .then((response) => {
//         console.log(response);
//         if (!response.ok)
//             // console.log('ERROR!! status is not 200');
//             throw new Error(` Status Code is ${response.status}`);

//         return response.json();
//     })
//     .then((data) => {
//         // Fetched all people
//         console.log(data);
//         // then Ftech another URL
//         const filmsURL = data.results[0].films[0];
//         console.log(filmsURL);
//         return fetch(filmsURL);
//     })
//     .then((filmsResponse) => {
//         filmsResponse.json().then( (filmsData) => {
//             console.log(filmsData);
//             console.log(filmsData.title);
//         })
//     })
//     .catch((err) => {
//         console.log('something whet wrong with FETCH');
//         console.log(err);
//     });

const checkStatusAndParse = (response) => {
    if (!response.ok)
        throw new Error(` Status Code is ${response.status}`);
    return response.json();
}
const printPeople = (data) => {
    console.log('.............printing 10 people');
    for (person of data.results) {
        console.log(person.name);
    }
    return Promise.resolve(data.next);
}
const nextURL = (URL) => {
    return fetch(URL);
}

const printPlanets = (data) => {
    console.log('.............printing 10 planets');
    
    for (planet of data.results) {
        console.log(planet.name);
    }
    return Promise.resolve(data.next);
}

fetch('https://swapi.co/api/people/')
    .then(checkStatusAndParse)
    .then(printPeople)
    .then(nextURL)
    .then(checkStatusAndParse)
    .then(printPeople)
    .catch((err) => {
        console.log('something whet wrong with FETCH');
        console.log(err);
    });

fetch('https://swapi.co/api/planets/')
    .then(checkStatusAndParse)
    .then(printPlanets)
    .catch((err) => {
        console.log('something whet wrong with FETCH');
        console.log(err);
    });