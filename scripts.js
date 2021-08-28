let pokemonList = [
  {
    name: 'Charmander',
    height: 0.6,
    types: 'fire'
  },
  {
    name: 'Bulbasaur',
    height: 0.7,
    types: ['grass','poison',]
  },
  {
    name: 'Squirtle',
    height: 0.5,
    types: 'water'}
];

for(let i=0; i < pokemonList.length; i++){
  document.write(pokemonList[i].name + ' is ' + pokemonList[i].height + ' meters tall.' + '<br>');
  if (pokemonList[i].height > 0.6){
    document.write('The Pokemon above is quite big' + '<br>');
  }
}
