import { useEffect, useState } from "react"; //useEffect and useState
import { getAllPokemon } from "./data/pokeapi"; // fetch pokemon
import PokemonCard from "./components/PokemonCard"; //card with info

const App = () => {
  const [pokemon, setPokemon] = useState([]); //useState for pokemon

  useEffect(() => {
    // If for some reason, the useEffect ended up running several times back-to-back, very quickly,
    // it could cause potential errors. By adding the let ignore = false, and then setting it to true  in the cleanup function,
    // we help prevent those errors, so that only the very last network request updates our UI
    let ignore = false;
    const getAndSetPokemon = async () => {
      //use the fetch
      try {
        const allPokemon = await getAllPokemon(); //await all pokemon
        // console.log(allPokemon);
        if (!ignore) {
          setPokemon(allPokemon);
        }
        //error
      } catch (error) {
        console.error(error);
      }
    };

    //call the method
    getAndSetPokemon();

    return () => {
      ignore = true;
    };
  }, []); //empty parameter run only once
  return (
    <div>
      <h1>Fetch inside useEffect</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {/* map function */}
        {pokemon.map((p) => (
          <PokemonCard key={p.id} {...p} />
        ))}

        {/* (...p) - The spread (...) syntax allows an iterable, such as an array or string, to be expanded in places 
        where zero or more arguments (for function calls) 
        or elements (for array literals) are expected. In an object literal, 
        the spread syntax enumerates the properties of an object and adds the key-value pairs to the object being created. */}
      </div>
    </div>
  );
};

export default App;
