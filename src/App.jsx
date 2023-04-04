import PokemonCard from "./components/PokemonCard"
import "./App.css"
import PropTypes from "prop-types"


function App() {

  return (
    <body>
      <div>
        <PokemonCard pokemon={{ name: "BULBIZARRE", imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" }} />
      </div>
    </body>
  )

}

const pokemonList = [
  {
    name: "BULBIZARRE",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "NEW",
  },
];

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  }).isRequired,
}


export default App
