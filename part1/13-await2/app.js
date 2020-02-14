// async function getPokemon() {
//     const poke1 = await axios.get('https://pokeapi.co/api/v2/pokemon/1');
//     const poke2 = await axios.get('https://pokeapi.co/api/v2/pokemon/2');
//     const poke3 = await axios.get('https://pokeapi.co/api/v2/pokemon/3');
//     console.log(poke1);
//     console.log(poke2);
//     console.log(poke3);

// }

async function getPokemon() {
    const prom1 = axios.get('https://pokeapi.co/api/v2/pokemon/1');
    const prom2 = axios.get('https://pokeapi.co/api/v2/pokemon/2');
    const prom3 = axios.get('https://pokeapi.co/api/v2/pokemon/3');
    console.log(prom1);
    // const poke1 = await prom1;
    // const poke2 = await prom2;
    // const poke3 = await prom3;
    // console.log(poke1);
    const all = await Promise.all([prom1, prom2, prom3]);
    console.log(all);
    printPokemon(all);
    
}

function printPokemon(all) {
    for (pokemon of all) {
        console.log(pokemon.data.name);
    }
}

getPokemon();