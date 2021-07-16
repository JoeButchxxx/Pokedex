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



}

