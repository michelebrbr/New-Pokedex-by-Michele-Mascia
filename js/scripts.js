let pokemonRepository = (function () {
  let repository = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  function showDetails(pokemon){
    console.log(pokemon);
  }

  function loadList() {
    return fetch(apiUrl).then(function(response){
      return response.json();
    }).then(function(json){
      json.results.forEach(function(item){
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function(e){
      console.error(e);
    })
  }

  return {
    add: function(pokemon) {
      repository.push(pokemon);
    },
    showDetails: showDetails,
    addListItem: function(pokemon) {
      let pokemonList = document.querySelector(".pokemon-list");
      let listItem = document.createElement('li');
      let button = document.createElement('button');
      button.innerText = pokemon.name;
      button.classList.add('button-class');

      button.addEventListener('click', function () {
        showDetails(pokemon);
      }),

      listItem.appendChild(button);
      pokemonList.appendChild(listItem);
    },

    getAll: function() {
      return repository;
    },

    loadList: loadList
  };
})();

pokemonRepository.loadList().then(function){
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
