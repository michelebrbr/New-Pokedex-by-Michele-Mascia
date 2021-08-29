let pokemonRepository = (function () {
  let repository = [];

  function showDetails(pokemon){
    console.log(pokemon);
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
    }
  };
})();

pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});
