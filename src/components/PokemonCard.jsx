/* eslint-disable react/prop-types */
import styles from './PokemonCard.module.css';


function PokemonCard({props}) {

  return (
    <div>
      <figure className={styles.card}>
      {props.imgSrc ? 
        <img 
          src={props.imgSrc}
          alt="Bulbasaur-picture"
          className={styles.card_img}
        />
      :
        <p>?????</p>
      }
      </figure>
      <figcaption>{props.name}</figcaption>
    </div>
  );
}

export default PokemonCard;
