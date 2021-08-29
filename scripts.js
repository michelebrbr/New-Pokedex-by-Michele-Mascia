let pokemonRepository = (function () {
  let pokemonList = [
  {
    name: 'Kurapika Diznats',
    age: 17
  },
  {
    name: 'Leorio Piruz',
    age: 19
  }
  ];

  return {
    add: function(pokemon) {
      pokemonList.push(pokemon);
    },
    getAll: function() {
      return pokemonList;
    }
  };
})();

pokemonRepository.getAll().forEach(function (pokemon) {
  document.write(pokemon.name +'<br>');
});
