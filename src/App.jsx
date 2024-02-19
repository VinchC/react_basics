/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import PokemonCard from "./components/PokemonCard";
import NavBar from "./components/NavBar";
import Counter from "./components/Counter";
import Search from "./components/Search";
// import SayHello from "./components/SayHello";

import "./Scss.jsx";
import StyledComponents from "./StyledComponents.jsx";

// import "./App.css";

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
  useEffect(() => {
    alert("Hello Pokemon trainer !:)");
  }, []);

  const [pokemonIndex, setPokemonIndex] = useState(0);

  return (
    <div>
      <Search />
      <Counter />
      <NavBar
        pokemonIndex={pokemonIndex}
        setPokemonIndex={setPokemonIndex}
        pokemonList={pokemonList}
      />
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      <StyledComponents />
    </div>
  );
}

export default App;
