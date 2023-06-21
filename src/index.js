const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);

window.addEventListener('load', (event) => {
  let html = '';
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {

    card.classList.add("turned");

      console.log(`Card clicked: ${card}`);

      memoryGame.pickedCards.push(card);

if (memoryGame.pickedCards.length === 2){
  memoryGame.pairsClicked += 1;
  if (memoryGame.checkIfFinished()){
    document.querySelector("#memory-board").innerHTML = "";
  }

  if (checkIfPair(memoryGame.pickedCards[0], memoryGame.pickedCards[1])){

    console.log("That's a pair!");

  } else {
    card.classList.remove("turned");
  }
}
    
    });
  });
});

/*
memoryGame.pickedCards.push(card);

if (memoryGame.pickedCards.length === 2){
  memoryGame.pairsClicked += 1;
  if (memoryGame.checkIfFinished()){
    document.querySelector("#memory-board").innerHTML = "";
  }

  if (checkIfPair(memoryGame.pickedCards[0], memoryGame.pickedCards[1])){

    console.log("That's a pair!");

  } else {
    card.classList.remove("turned");
  }
}
*/

// 2 conditions. 1st- check if its 2 cards . if yes, 2nd check + pairsClicked count ++. if no, do nothing.
//2nd- check if its pair.  not pair, remove.turned. pair - counts++ pairsGuessed 
// if total cards/2 === pairs counter - game finished