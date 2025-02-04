// fetch pokemon
const getAllPokemon = async () => {
    // to save from having to fetch 150 times, we can add some info to the limited info 
    // we get back from the list
    //fetch()
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=150`);

    //res.json()
    const data = await res.json();
    const pokemon = data.results;
    //we map over the array of pokemon, and add a link to the front image, and give it an id
    const pokeWithSprite = pokemon.map((poke, i) => ({
        ...poke,
        // use default_front sprite URL so we can have an image
        sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            i + 1
        }.png`,
        //arrays are zero indexed, and pokemon numbering starts at 1, so id of i + 1 gives us the right pokemon
        id: i + 1,
    }));

    return pokeWithSprite;
};

export { getAllPokemon };
