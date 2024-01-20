import PokemonCard from "./components/PokemonCard";
import SayHello from "./components/SayHello";

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

  return (
    <div>
      <PokemonCard pokemon={pokemonList[1]} />
      <SayHello name="Vincent" age={41} />
    </div>
  );
}

export default App;
