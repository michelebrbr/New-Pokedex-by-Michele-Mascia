const shinyButton=document.querySelector("#shiny-button"),btnShinyFather=document.querySelector(".modal-footer");let pokemonRepository=function(){let e=[],t="https://pokeapi.co/api/v2/pokemon/?limit=151";function n(t){"object"==typeof t&&"name"in t&&"detailsUrl"in t&&"height"in t&&"weight"in t?e.push(t):console.log("ERROR")}function o(e){let t=e.detailsUrl;return fetch(t).then(function(e){return e.json()}).then(function(t){e.imageUrl=t.sprites.front_default,e.imageUrlShiny=t.sprites.front_shiny,e.height=t.height,e.types=t.types,e.weight=t.weight,e.abilities=t.abilities,e.id=t.id,i(e),shinyButton.addEventListener("click",function(){l(e)})}).catch(function(e){console.error(e)})}function i(e){let t=document.querySelector("#modal-container");c(e),t.classList.add("is-visible")}function r(e){o(e)}function c(e){const t=document.querySelector(".modal-title"),n=document.querySelector(".modal-body"),o=document.createElement("img");t.innerText="#"+e.id+" "+e.name.charAt(0).toUpperCase()+e.name.slice(1),n.innerHTML="<div> Height: "+e.height+"</div> <div> Weight: "+e.weight+"</div>",o.src=e.imageUrl,n.appendChild(o);document.querySelector("#shiny-button"),document.querySelector(".modal-footer")}function l(e){const t=document.querySelector("#shiny-button"),n=document.createElement("img");n.src=e.imageUrlShiny,document.querySelector(".modal-body").appendChild(n),document.querySelector(".modal-footer").removeChild(t)}return{add:n,getAll:function(){return e},addListItem:function(e){let t=document.querySelector(".list-group"),n=document.createElement("li"),o=document.createElement("button");n.classList.add("group-list-item"),o.innerText=e.name.charAt(0).toUpperCase()+e.name.slice(1),o.classList.add("button-class","btn","btn-primary"),o.setAttribute("data-target","#pokemonModal"),o.setAttribute("data-toggle","modal"),n.appendChild(o),t.appendChild(n),o.addEventListener("click",function(){r(e)})},showDetails:r,loadList:function(){return fetch(t).then(function(e){return e.json()}).then(function(e){e.results.forEach(function(e){n({name:e.name,detailsUrl:e.url,height:e.height,weight:e.weight,id:e.id})})}).catch(function(e){console.error(e)})},loadDetails:o,showModal:i,modalInfo:c,showShiny:l}}();pokemonRepository.loadList().then(function(){pokemonRepository.getAll().forEach(function(e){pokemonRepository.addListItem(e)})});