const elements = {
    pokemonID: document.getElementById('pokemon-id'),
    pokemonName: document.getElementById('pokemon-name'),
    spriteContainer: document.getElementById('sprite-container'),
    types: document.getElementById('types'),
    height: document.getElementById('height'),
    weight: document.getElementById('weight'),
    hp: document.getElementById('hp'),
    attack: document.getElementById('attack'),
    defense: document.getElementById('defense'),
    specialAttack: document.getElementById('special-attack'),
    specialDefense: document.getElementById('special-defense'),
    speed: document.getElementById('speed'),
    searchForm: document.getElementById('search-form'),
    searchInput: document.getElementById('search-input'),
  };
  
  const getPokemon = async () => {
    try {
      const pokemonNameOrId = elements.searchInput.value.toLowerCase();
      const response = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokemonNameOrId}`);
      const data = await response.json();
  
      setPokemonData(data);
    } catch (err) {
      resetDisplay();
      alert('Pokémon not found');
      console.log(`Pokémon not found: ${err}`);
    }
  };
  
  const setPokemonData = (data) => {
    elements.pokemonName.textContent = data.name.toUpperCase();
    elements.pokemonID.textContent = `#${data.id}`;
    elements.weight.textContent = `Weight: ${data.weight}`;
    elements.height.textContent = `Height: ${data.height}`;
    elements.spriteContainer.innerHTML = `<img id="sprite" src="${data.sprites.front_default}" alt="${data.name} front default sprite">`;
  
    setStats(data.stats);
    setTypes(data.types);
  };
  
  const setStats = (stats) => {
    const statsElements = [elements.hp, elements.attack, elements.defense, elements.specialAttack, elements.specialDefense, elements.speed];
    statsElements.forEach((el, index) => {
      el.textContent = stats[index].base_stat;
    });
  };
  
  const setTypes = (types) => {
    elements.types.innerHTML = types.map(obj => `<span class="type ${obj.type.name}">${obj.type.name}</span>`).join('');
  };
  
  const resetDisplay = () => {
    const sprite = document.getElementById('sprite');
    if (sprite) sprite.remove();
  
    Object.values(elements).forEach(el => {
      if (el !== elements.searchForm && el !== elements.searchInput) {
        el.textContent = '';
      }
    });
  };
  
  elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    getPokemon();
  });
  