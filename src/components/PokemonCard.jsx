import "../App.css";



function PokemonCard(props) {
    console.log(props)
    const pokemon = props.pokemon
    return (
        < figure className="card" >
            {
                pokemon.imgSrc === undefined ? (
                    <p className="noCardImg">???</p>
                ) : (
                    <img className="cardImg" src={pokemon.imgSrc} alt={pokemon.name} />)
            }
            < figcaption className="cardText" > {pokemon.name}</figcaption >
        </figure >)
}

PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgSrc: PropTypes.string
    }).isRequired
}


export default PokemonCard;