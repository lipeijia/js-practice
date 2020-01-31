
// const starWarData = new XMLHttpRequest();

// starWarData.addEventListener('load', function () {
//     console.log(' first worked');
//     const people = JSON.parse(this.responseText);
//     console.log(people);
//     const filmsURL = people.results[0].films[0];
//     console.log(filmsURL);
//     const filmsData = new XMLHttpRequest();
//     filmsData.addEventListener('load', function () {
//         console.log('second worked');
//         const films = JSON.parse(this.responseText);
//         console.log(films);
//     });

//     filmsData.addEventListener('error', function () {
//         console.log('second error');
//     });

//     filmsData.open('GET', filmsURL);
//     filmsData.send();
// });

// starWarData.addEventListener('error', function () {
//     console.log('error');
// });

// starWarData.open('GET', 'https://swapi.co/api/people/');
// starWarData.send();

// console.log('request sent');

fetch('https://swapi.co/api/people/')
.then( (response)=> {
    console.log(response); 
    if (!response.ok) 
        // console.log('ERROR!! status is not 200');
        throw new Error(` Status Code is ${response.status}`);

    response.json().then((data) => {
        console.log(data);
        for (let person of data.results) {
            console.log(person.name);
        }
    });
})
.catch((err) => {
    console.log('something whet wrong with FETCH');
    console.log(err);
});