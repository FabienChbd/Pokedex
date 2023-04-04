import "../App.css";



function PokemonCard() {
    const pokemon = pokemonList[0]
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


export default PokemonCard;