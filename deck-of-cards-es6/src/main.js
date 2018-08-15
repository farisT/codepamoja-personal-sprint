/* eslint-disable no-alert, no-console, no-tabs, prefer-const, import/extensions */
let deckId = null;
let hand = [];
let dealerHand = [];

let interval = null;
let dealerInterval = null;


const cardFloor = document.querySelector('.card-floor');
const dealerFloor = document.querySelector('.dealer-floor');
const hitMeButton = document.querySelector('.hit-me');
const stayButton = document.querySelector('.stay');
const score = document.querySelector('.score');

const dealerScore = document.querySelector('.dealer-score');


let cardImages = [];
let dealerCardImages = [];
let checkCount = 0;
let handScore = 0;

let checkDealerCount = 0;
let dealerHandScore = 0;


const fetchDeck = () => {
  fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    .then(response => response.json())
    .then((myJson) => {
      deckId = myJson.deck_id;
      console.log(myJson);
      // console.log(deckId);
    })
    .catch((e) => {
      console.log(e);
    });
};

const checkHand = () => {
  for (let count = checkCount; count < hand.length; count += 1) {
    checkCount += 1;
    let newImage = new Image();
    cardImages[count] = hand[count].image;
    newImage.setAttribute('src', hand[count].image);
    cardFloor.appendChild(newImage);
  }
  return cardImages;
};

const checkDealerHand = () => {
  for (let count = checkDealerCount; count < dealerHand.length; count += 1) {
    checkDealerCount += 1;
    // debugger;
    let newDealerImage = new Image();
    dealerCardImages[count] = dealerHand[count].image;
    newDealerImage.setAttribute('src', dealerHand[count].image);
    dealerFloor.appendChild(newDealerImage);
  }
  return dealerCardImages;
};

const checkDealerScore = () => {
  dealerHandScore = 0;
  for (let count = 0; count < dealerHand.length; count += 1) {
    if (dealerHand[count].value === 'KING' || dealerHand[count].value === 'QUEEN' || dealerHand[count].value === 'JACK') {
      dealerHandScore += 10;
    }
    if (dealerHand[count].value === 'ACE' && dealerHandScore <= 11) {
      dealerHandScore += 11;
    }
    if (dealerHand[count].value === 'ACE' && dealerHandScore > 11) {
      dealerHandScore += 1;
    }
    if (dealerHand[count].value !== 'KING' && dealerHand[count].value !== 'QUEEN' && dealerHand[count].value !== 'JACK' && dealerHand[count].value !== 'ACE') {
      dealerHandScore += parseFloat(dealerHand[count].value, 10);
    }
  }
  dealerScore.innerHTML = `Score: ${dealerHandScore}`;
};

const checkScore = () => {
  handScore = 0;
  for (let count = 0; count < hand.length; count += 1) {
    if (hand[count].value === 'KING' || hand[count].value === 'QUEEN' || hand[count].value === 'JACK') {
      handScore += 10;
    }
    if (hand[count].value === 'ACE' && handScore <= 11) {
      handScore += 11;
    }
    if (hand[count].value === 'ACE' && handScore > 11) {
      handScore += 1;
    }
    if (hand[count].value !== 'KING' && hand[count].value !== 'QUEEN' && hand[count].value !== 'JACK' && hand[count].value !== 'ACE') {
      console.log(hand[count].value);
      handScore += parseFloat(hand[count].value, 10);
    }
  }
  console.log(handScore);
  score.innerHTML = `Score: ${handScore}`;
};

const dealerDraw = () => {
  dealerFloor.style.display = 'unset';
  fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
    .then(response => response.json())
    .then((data) => {
      dealerHand = data.cards;
      console.log(dealerHand);
    })
    .then(checkDealerHand)
    .then(checkDealerScore)
    .then()
    .catch((e) => {
      console.log(e);
    });
};

const drawIntialCards = () => {
  fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      hand = data.cards;
      hitMeButton.style.display = 'unset';
      stayButton.style.display = 'unset';
      console.log(hand);
    })
    .then(checkHand)
    .then(checkScore)
    .then(dealerDraw)
    .catch((e) => {
      console.log(e);
    });
};


const dealerAI = () => {
  if (dealerHandScore <= 16) {
    fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
      .then(response => response.json())
      .then((data) => {
        dealerHand.push(data.cards[0]);
        console.log(dealerHand);
      })
      .then(checkDealerHand)
      .then(checkDealerScore)
      .catch((e) => {
        console.log(e);
      });
  } else {
    console.log('dealer done');
    clearInterval(dealerInterval);
  }
};


const dealerStartPlaying = () => {
  dealerInterval = setInterval(dealerAI, 3000);
};

const drawCard = () => {
  fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      hand.push(data.cards[0]);
      console.log(hand);
    })
    .then(checkHand)
    .then(checkScore)
    .catch((e) => {
      console.log(e);
    });
};

fetchDeck();

hitMeButton.addEventListener('click', drawCard);
stayButton.addEventListener('click', dealerStartPlaying);


const dead = () => {
  if (handScore > 21) {
    console.log('YOUR OUT');
    clearInterval(interval);
  }
  if (dealerHandScore > 21) {
    console.log('DEALER OUT');
    console.log(dealerHand);
    clearInterval(dealerInterval);
    clearInterval(interval);
  }
};

interval = setInterval(dead, 500);
// setTimeout(log, 1000);
setTimeout(drawIntialCards, 1000);
