async function fetchData() {

    const pokemonImgElement = document.getElementById("pokemonSprite");
    const pokemonName = document.getElementById("pokemonName").value.trim().toLowerCase();

    if (!pokemonName) {
        alert("Please enter a Pokémon name!");
        pokemonImgElement.style.display = "none";
        return;
    }

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if (!response.ok) {
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        
        pokemonImgElement.src = pokemonSprite;
        pokemonImgElement.style.display = "block";

    } catch(error) {
        console.error(error);
        pokemonImgElement.style.display = "none";
        alert("Pokémon not found! Please try again.");
    }
}