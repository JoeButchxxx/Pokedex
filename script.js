const search_term = document.getElementById('search_q');
const search_btn = document.getElementById('search-btn');

const getPokemonData = async query => {

  const url = `http://pokeapi.co/api/v2/pokemon/${query}`;
  const response = await fetch(url);

  if (response.status == 404 || response.statusText == 'Not Found') {
    document.getElementById('show_error').classList.add('show')
    document.getElementById('show_error').classList.remove('hidden')
    return

  }

  const pokemon = response.json()

  document.getElementById('update_img').setAttribute('src', pokemon.sprites.other.dream_world.front_default);
  document.getElementById('update_name').innerHTML = pokemon.name;
  document.getElementById('update_candy_title').innerHTML = `${pokemon.name}candy`;
  document.getElementById('update_hp').innerHTML = `HP ${Math.floor(Math.floor() * pokemon.stats[0].base_stats) * 1}`;

}

