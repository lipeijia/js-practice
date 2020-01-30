
// function reqListener() {
//     console.log(this.responseText);
// }

// var oReq = new XMLHttpRequest();
// oReq.addEventListener("load", reqListener);
// oReq.open("GET", "http://www.example.org/example.txt");
// oReq.send();

// ----- nested is hard to read -----
const starWarData = new XMLHttpRequest();

starWarData.addEventListener('load', function () {
    console.log(' first worked');
    const people = JSON.parse(this.responseText);
    console.log(people);
    const filmsURL = people.results[0].films[0];
    console.log(filmsURL);
    const filmsData = new XMLHttpRequest();
    filmsData.addEventListener('load', function() {
        console.log('second worked');
        const films = JSON.parse(this.responseText);
        console.log(films);
    });
    
    filmsData.addEventListener('error', function() {
        console.log('second error');
    });

    filmsData.open('GET', filmsURL);
    filmsData.send();
    // for (person of people.results) {
    //     console.log(person.name);
    // }
});

starWarData.addEventListener('error', function () {
    console.log('error');
});

starWarData.open('GET', 'https://swapi.co/api/people/');
starWarData.send();

console.log('request sent');

// ----- one is simple ------
// const starWarData = new XMLHttpRequest();

// starWarData.addEventListener('load', function() {
//     console.log('worked');
//     const people = JSON.parse(this.responseText);
//     console.log(people);
//         for( person of people.results) {
//             console.log(person.name);
//         }
// });

// starWarData.addEventListener('error', function() {
//     console.log('error'); 
// });

// starWarData.open('GET', 'https://swapi.co/api/people/');
// starWarData.send();

// console.log('request sent');
