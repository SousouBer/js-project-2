let diceNumber1 = Math.floor(Math.random() * 6) + 1;
let randomDice1 = 'images/dice' + diceNumber1 + '.png';

document.querySelectorAll('img')[0].setAttribute('src', randomDice1);

let diceNumber2 = Math.floor(Math.random() * 6) + 1;
let randomDice2 = 'images/dice' + diceNumber2 + '.png';

document.querySelectorAll('img')[1].setAttribute('src', randomDice2);

let headingContent = document.querySelector('h1');

if(diceNumber1 > diceNumber2){
  headingContent.innerHTML = 'Player 1 Won!';
} else if(diceNumber2 > diceNumber1) {
  headingContent.innerHTML = "Player 2 Won!";
} else {
  headingContent.innerHTML = 'Draw!';
}