import "../App.css";

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

function PokemonCard() {

    const cards = []
    for (let i = 0; i < pokemonList.length; i++) {
        const pokemon = pokemonList[i]
        cards.push(
            <figure className="card">
                {pokemon.imgSrc === undefined ? (
                    <p className="noCardImg">???</p>
                ) : (
                    <img className="cardImg" src={pokemon.imgSrc} alt={pokemon.name} />)}
                <figcaption className="cardText">{pokemon.name}</figcaption>
            </figure>
        )
    }
    return cards
}




export default PokemonCard;