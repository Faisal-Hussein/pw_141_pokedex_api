async function getPokemonData() {
    const pokemonName = document.getElementById('pokeInput').value.toLowerCase();
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
    document.getElementById("front_default").src = data.sprites.front_default;
    document.getElementById("pokemon_name").innerHTML = data.name;
    
    // try {
    //   const response = await fetch(apiUrl);
    //   const data = await response.json();

    //   displayPokemonInfo(data);
    // } catch (error) {
    //   console.error('Error fetching data:', error);
    // }
  }