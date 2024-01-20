/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

import PropTypes from "prop-types";

function SayHello({name, age}) {
  // const msg = "Hello !";
  
  return <p>Hello, I'm {name} and I'm {age} years old.</p>
}

SayHello.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,

}

export default SayHello;