let cards = [];
let sum =  0;
let hasBlackJack = false;
let isAlive = false;
let message = ``;
let messageEl = document.getElementById(`message-el`);
let sumEl = document.querySelector(`.sum-el`);
let cardsEl = document.querySelector(`.cards-el`);
// let player = {
//     name: `Imman`,
//     chips: `$120`
// }

// let playEl = document.querySelector(`.player-el`)
// playEl.textContent = player.name + `: ` + player.chips

function getRandomCard() {
    let randomCard = Math.floor(Math.random()*13)+1
    if (randomCard > 10) {
        return 10
    } else if (randomCard === 1) {
        return 11
    } else
    return randomCard
}

function startGame(){
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame()
}

function renderGame() {
    cardsEl.textContent = `Cards: `;
    for (i=0; i<cards.length; i++){
        cardsEl.textContent += cards[i] + ` `;
    }
    sumEl.textContent = `Sum: ` + sum;
    if (sum <= 20) {
        message = `Do you want to draw a new card?`
    } else if (sum === 21) {
        hasBlackJack = true;
        message = `You've got Blackjack!`
    } else {
        isAlive = false;
        message = `You're out of the game!`
    }
    messageEl.textContent = message;
}

function newCard() {
    if (isAlive && hasBlackJack === false) {
    let thirdCard = getRandomCard();
    sum += thirdCard;
    cards.push(thirdCard)
    console.log(cards)
    renderGame()
    }
}