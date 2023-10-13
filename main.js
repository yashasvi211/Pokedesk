const poke_container = document.getElementById('container');
const count = 100;
const colors = {
  flying: "#F5F5F5",
  fire: "#FF6D5E",
  water: "#4A90DA",
  grass: "#8ED752",
  electric: "#FFCE4B",
  psychic: "#FF73A5",
  ground: "#AA9744",
  rock: "#C5BC91",
  ice: "#70CCBD",
  fighting: "#D3425F",
  poison: "#A864C7",
  steel: "#6D8F9E",
  dark: "#746C75",
  fairy: "#EC8CE5",
  dragon: "#4A5AC4",
  normal: "#9298A3"
};
const main_type=Object.keys(colors)
console.log(main_type)


async function fetchpokemon() {
  for (let i = 1; i <= count; i++) {
    await getPokemon(i);
  }
}

async function getPokemon(id) {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const result = await fetch(url);
  const data = await result.json(); // Added parentheses here

  createPokemon(data, id); // Pass the 'id' to the createPokemon function
}

function createPokemon(pokemon, id) 
{
  const name=pokemon.name[0].toUpperCase()+pokemon.name.slice(1);
  const pokemonel = document.createElement('div');
  const type=pokemon.types[0].type.name;
  //backgoud changein'
  const bg=colors[type];
  pokemonel.style.backgroundColor=bg;
  pokemonel.classList.add('pokemon');
  console.log(pokemon.name);
  const innerhtml = `
    <div class="img-container">
        <img src="https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/dream-world/${id}.svg"  alt="">
    </div>
    <div class="info">
        <span class="number">#${id}</span>
        <h3 class="name">${name}</h3>
        <small class="type">Type: <span>${type}</span></small>
    </div>
  `;
  pokemonel.innerHTML = innerhtml;
  poke_container.appendChild(pokemonel);
}

fetchpokemon();
