import styles from './PokemonCard.module.css';

function PokemonCard() {
  return (
    <div>
      <figure className={styles.card}>
        <img 
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
          alt="Bulbasaur-picture"
          className={styles.card_img}
        />
      </figure>
      <figcaption>Bulbasaur</figcaption>
    </div>
  );
}

export default PokemonCard;
