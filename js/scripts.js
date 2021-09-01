//let shinyToggler = true;
const shinyButton = document.querySelector('#shiny-button');
const btnShinyFather = document.querySelector('.modal-footer');

let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=151';

  function add(pokemon) {
    if (
      typeof pokemon === 'object' &&
      'name' in pokemon &&
      'detailsUrl' in pokemon &&
      'height' in pokemon &&
      'weight' in pokemon
    ) {
      pokemonList.push(pokemon);
    } else {
      console.log('ERROR');
    }
  }
  function getAll() {
    return pokemonList;
  }
  function addListItem(pokemon) {
    let pokemonGroup = document.querySelector('.list-group');
    let listpokemon = document.createElement('li');
    let button = document.createElement('button');

    listpokemon.classList.add('lista');
    listpokemon.classList.add('group-list-item');
    button.innerText = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

    button.classList.add('button-class', 'btn', 'btn-primary',);

    button.setAttribute('data-target', '#pokemonModal');
    button.setAttribute('data-toggle', 'modal');

    listpokemon.appendChild(button);
    pokemonGroup.appendChild(listpokemon);
    button.addEventListener('click', function () {
      showDetails(pokemon);
    })

  }
  function showModal(item) {
    let modalContainer = document.querySelector('#modal-container');
    modalInfo(item);

    modalContainer.classList.add('is-visible');

    /*modal.classList.add('modal');
    modalContainer.appendChild(modal);
    closeElement.innerText = 'X';
    closeElement.classList.add("close")
    titleElement.innerText = title;
    imageElement.setAttribute('src', img);

    contentElement.innerText = 'Height:' + height;
    modal.appendChild(closeElement);
    modal.appendChild(titleElement);
    modal.appendChild(imageElement);
    modal.appendChild(contentElement);

    closeElement.addEventListener('click', hideModal);*/
    function hideModal(e) {
      let modalContainer = document.querySelector('#modal-container');
      modalContainer.classList.remove('is-visible');

      modalContainer.removeChild(modal);
    }
  }

  function showDetails(pokemon) {
    loadDetails(pokemon);
  }

  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url,
          height: item.height,
          weight: item.weight
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  function loadDetails(item) {
    let url = item.detailsUrl;

    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {

      item.imageUrl = details.sprites.front_default;
      item.imageUrlShiny = details.sprites.front_shiny;
      item.height = details.height;
      item.types = details.types;
      item.weight = details.weight;
      item.abilities = details.abilities;
      item.id = details.id;



      showModal(item);
      shinyButton.addEventListener('click',function(){


        showShiny(item);

      })

    }).catch(function (e) {
      console.error(e);
    });
  }

  function modalInfo(pokemon) {
    const pkName = document.querySelector('.modal-title');
    const body = document.querySelector('.modal-body');
    const pkImage = document.createElement('img');

    pkName.innerText = '#'+pokemon.id + ' ' + pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    body.innerHTML = '<div> Height: ' +  pokemon.height + '</div> <div> Weight: ' +  pokemon.weight + '</div>'
    pkImage.src = pokemon.imageUrl;
    body.appendChild(pkImage);

    const shinyButton = document.querySelector('#shiny-button');
    const btnShinyFather = document.querySelector('.modal-footer');


  }

  function showShiny(pokemon){
    const shinyButton = document.querySelector('#shiny-button');
    const shinyImg = document.createElement('img');
    shinyImg.src = pokemon.imageUrlShiny;
    const body = document.querySelector('.modal-body');
    body.appendChild(shinyImg);
    const btnShinyFather = document.querySelector('.modal-footer');
    btnShinyFather.removeChild(shinyButton);
    //shinyToggler = true;
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails,
    loadList: loadList,
    loadDetails: loadDetails,
    showModal: showModal,
    modalInfo: modalInfo,
    showShiny: showShiny
  };
})();

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
