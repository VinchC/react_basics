import PropTypes from "prop-types";

function NavBar({pokemonIndex, setPokemonIndex, pokemonList}) {
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
          <button type="button" onClick={nextPokemon}>Suivant</ button>
        )}
        </div>
    );
}

NavBar.propTypes = {
    pokemonIndex: PropTypes.number.isRequired,
    setPokemonIndex: PropTypes.func.isRequired,
    pokemonList: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            imgSrc: PropTypes.string,
        })
    ).isRequired,
};

export default NavBar;