// let button = document.querySelector(“a-button”);
// button.addEventListener("click"', (e) => {
// console.log(e)
// })

// button.dispatchEvent(new KeyboardEvent('keydown', {
//   'key': 'a'
// }));



// document.onkeydown = function (e) {
//   switch (e.key) {
//     case 'ArrowUp':
//       // up arrow
//       break;
//     case 'ArrowDown':
//       // down arrow
//       break;
//     case 'ArrowLeft':
//       // left arrow
//       break;
//     case 'ArrowRight':
//     // right arrow
//   }


//   document.onkeydown = checkKey;

//   function checkKey(e) {

//     e = e || window.event;

//     if (e.keyCode == '38') {
//       // up arrow
//     }
//     else if (e.keyCode == '40') {
//       // down arrow
//     }
//     else if (e.keyCode == '37') {
//       // left arrow
//     }
//     else if (e.keyCode == '39') {
//       // right arrow
//     }

//   }

// var leftKey = 37, upKey = 38, rightKey = 39, downKey = 40;
// var keystate;
// document.addEventListener("keydown", function (e) {
//   keystate[e.keyCode] = true;
// });
// document.addEventListener("keyup", function (e) {
//   delete keystate[e.keyCode];
// });

// if (keystate[leftKey]) {
//   //code to be executed when left arrow key is pushed.
// }
// if (keystate[upKey]) {
//   //code to be executed when up arrow key is pushed.
// }
// if (keystate[rightKey]) {
//   //code to be executed when right arrow key is pushed.
// }
// if (keystate[downKey]) {
//   //code to be executed when down arrow key is pushed.
// }

//   // // GAME SEQUENCE
// // let newSession; let newGame; let play; let finish; let restart;

// // // Step 1: new session
// // newSession = () => {
// //   const url = `${baseUrl}/sessions`;

// //   fetch(url, {
// //     method: 'POST',
// //     headers: { 'Content-Type': 'application/json' }
// //   })
// //     .then(response => response.json())
// //     .then((data) => {
// //       sessionId = data.id;
// //       displayScreen(newGameScreen);
// //     });
// // };


// // // Step 2: new game
// // newGame = (event) => {
// //   event.preventDefault();

// //   const url = `${baseUrl}/sessions/${sessionId}/games`;
// //   const playerNames = { player1: player1Name.value, player2: player2Name.value };

// //   fetch(url, {
// //     method: 'POST',
// //     headers: { 'Content-Type': 'application/json' },
// //     body: JSON.stringify(playerNames)
// //   })
// //     .then(response => response.json())
// //     .then((data) => {
// //       gameId = data.game.id;
// //       players = data.game.players;
// //       play();
// //     });
// // };


// // // Step 3: play
// // const moveForward = (player) => {
// //   const wagon = document.querySelector(`#player${player}_race .active`);
// //   if (wagon.nextElementSibling) {
// //     wagon.nextElementSibling.classList.add('active');
// //     wagon.classList.remove('active');
// //   } else {
// //     const winner = players[player - 1];
// //     finish(winner);
// //   }
// // };

// // const moveWagons = (event) => {
// //   if (event.key === 'q') {
// //     moveForward(1);
// //   } else if (event.key === 'p') {
// //     moveForward(2);
// //   }
// // };

// // play = () => {
// //   displayScreen(playScreen);
// //   time = new Date();
// //   document.addEventListener('keyup', moveWagons);
// // };


// // // EventListeners on buttons
// // newSessionBtn.addEventListener('click', newSession);
// // newGameBtn.addEventListener('click', newGame);
// // restartBtn.addEventListener('click', restart);
