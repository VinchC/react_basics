import PokemonCard from "./components/PokemonCard";

import "./App.css";

function App() {
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];

  let pokemon = pokemonList[0];

  return (
    <div>
      <PokemonCard props={pokemon} />
    </div>
  );
}

export default App;
