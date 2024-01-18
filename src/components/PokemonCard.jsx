/* eslint-disable react/prop-types */
import styles from './PokemonCard.module.css';


function PokemonCard({pokemon}) {

  return (
    <div>
      <figure className={styles.card}>
      {pokemon.imgSrc ? 
        <img 
          src={pokemon.imgSrc}
          alt="Bulbasaur-picture"
          className={styles.card_img}
        />
      :
        <p>?????</p>
      }
      </figure>
      <figcaption>{pokemon.name}</figcaption>
    </div>
  );
}

export default PokemonCard;
