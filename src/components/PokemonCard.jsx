import styles from './PokemonCard.module.css';


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

function PokemonCard() {
  let pokemon = pokemonList[1];
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
