/*
Steps 1-3 READ THE PDF!
*/
(function () {
  let videoGameForm = document.querySelector('#video-game-form');
  let allGameList = document.querySelector('.all-games');
  let allGameListItems = document.querySelectorAll('.all-games li');
  let myGameList = document.querySelector('.my-favourite-games');
  let myGames = [];

  // event listener for step 1
  videoGameForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let platform = event.target.elements['platform-family'].value.toLowerCase();
    filterGames(platform);
  });

  const filterGames = (platform) => {
    allGameListItems.forEach((gameItem)=> {
      let gameText = gameItem.innerText.toLowerCase();
      if (gameText.includes(platform)) {
        gameItem.classList.remove('hidden-item');
      } else {
        gameItem.classList.add('hidden-item');
      }
    })
  }

  // event listener for step 2
  /* HTML for step 2 to add to the list
  <li class="list-group-item">VIDEO GAME NAME HERE</li>
  */
  allGameList.addEventListener('click', (event) => {
    let game = event.target.innerText;
    addToFavouriteGames(game);
  });

  const addToFavouriteGames = (newFavouriteGame) => {
    myGames.push(newFavouriteGame);
    console.log(myGames);
    renderFavouritesList();
  }

  const renderFavouritesList = ()=> {
    myGameList.innerHTML = "";
    myGames.forEach((gameIterator)=> {
      myGameList.innerHTML += `<li class="list-group-item">${gameIterator}</li>`;
    })
  }

  // event listener for step 3
  myGameList.addEventListener('click', (event) => {
    let FavouriteGame = event.target.innerText;
    removeFromFavouriteGames(FavouriteGame);
  })

  const removeFromFavouriteGames = (game)=> {
    let index = myGames.indexOf(game);
    myGames.splice(index, 1);
    console.log(myGames);
    renderFavouritesList();
  }
})();
