import PropTypes from "prop-types";

function NavBar({setPokemonIndex, pokemonList}) {
  const pikachuCheck = () => {
    if (pokemonList[name] == "pikachu") {
      alert("pika pikachu !!!");
    }
  }


    return (
        <nav>
          {pokemonList.map((pokemon, index) => (
            <button
              type="button"
              onClick={() => {
                setPokemonIndex(index); 
                pikachuCheck(pokemon.name)
              }}
              key={pokemon.name}
            >
              {pokemon.name}
            </button>
          ))}
        </nav>
    );
}

NavBar.propTypes = {
    setPokemonIndex: PropTypes.func.isRequired,
    pokemonList: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            imgSrc: PropTypes.string,
        })
    ).isRequired,
};

export default NavBar;