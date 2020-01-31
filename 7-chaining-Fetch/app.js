
// ----- single -----
// fetch('https://swapi.co/api/people/')
// .then( (response)=> {
//     console.log(response); 
//     if (!response.ok) 
//         // console.log('ERROR!! status is not 200');
//         throw new Error(` Status Code is ${response.status}`);

//     response.json().then((data) => {
//         console.log(data);
//         for (let person of data.results) {
//             console.log(person.name);
//         }
//     });
// })
// .catch((err) => {
//     console.log('something whet wrong with FETCH');
//     console.log(err);
// });

fetch('https://swapi.co/api/people/')
    .then((response) => {
        console.log(response);
        if (!response.ok)
            // console.log('ERROR!! status is not 200');
            throw new Error(` Status Code is ${response.status}`);

        return response.json();
    })
    .then((data) => {
        // Fetched all people
        console.log(data);
        // then Ftech another URL
        const filmsURL = data.results[0].films[0];
        console.log(filmsURL);
        return fetch(filmsURL);
    })
    .then((filmsResponse) => {
        filmsResponse.json().then( (filmsData) => {
            console.log(filmsData);
            console.log(filmsData.title);
        })
    })
    .catch((err) => {
        console.log('something whet wrong with FETCH');
        console.log(err);
    });