/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import PokemonCard from "./components/PokemonCard";
// import SayHello from "./components/SayHello";

import "./App.css";

const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

function App() {

  const [pokemonIndex, setPokemonIndex] = useState(0);

  const previousPokemon = () => {
    setPokemonIndex(pokemonIndex - 1);
  }

  const nextPokemon = () => {
    setPokemonIndex(pokemonIndex + 1);
  }

  return (
    <div>
      { pokemonIndex > 0 && (
        <button type="button" onClick={previousPokemon}>Précédent</button>
      )}
      { pokemonIndex < pokemonList.length - 1 && (
        <button onClick={nextPokemon}>Suivant</ button>
      )}
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
    </div>
  );
}

export default App;
