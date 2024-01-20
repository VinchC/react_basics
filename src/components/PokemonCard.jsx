/* eslint-disable react/prop-types */
import styles from './PokemonCard.module.css';

import PropTypes from "prop-types";


function PokemonCard({ pokemon }) {
  return (
      <figure className={styles.card}>
      {pokemon.imgSrc ? 
        <img 
          src={pokemon.imgSrc}
          alt={pokemon.name}
          className={styles.card_img}
        />
      :
        <p>?????</p>
      }
        <figcaption>{pokemon.name}</figcaption>
      </figure>
  );
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  }).isRequired,
}

export default PokemonCard;
