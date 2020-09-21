// function getPlanets() {
//     return axios.get('https://swapi.co/api/planets/');
// }

// getPlanets().then(({data}) => {
//     console.log('fetch sucessed');
//     console.log(Promise.resolve(data.next));
//     return Promise.resolve(data.next);
// }).catch((err) => {
//     console.log(err);
    
// });

async function getPlanets() {
    try {
        const res = await axios.get('https://swapi.co/api/planets/');
        console.log(res.data);
    } catch(err) {
        console.log('in catch: ', err);
    }
}

getPlanets();