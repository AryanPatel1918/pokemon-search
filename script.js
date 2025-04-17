async function fetchData() {
    try {

        const pokemonName = document.getElementById("pokemonName").value.trim().toLowerCase();

        if (!pokemonName) {
            alert("Please enter a Pokémon name!");
            return;
        }

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if (!response.ok) {
            throw new Error("Could not fetch resource");
        }
        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        
        pokemonImgElement = document.getElementById("pokemonSprite");
        pokemonImgElement.src = pokemonSprite;
        pokemonImgElement.style.display = "block";

    } catch(error) {
        console.error(error);
    }
}