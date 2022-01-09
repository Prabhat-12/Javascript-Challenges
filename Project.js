//Challenge 1:Your Age in Days

function ageInDays() {
    var birthYear = prompt('What year were you born...my friend?')
    var AgeInDays = ((2022 - birthYear) * 365);
    var h1 = document.createElement('h1')
    var textAnswer = document.createTextNode("You are " + AgeInDays + " Days old.")
    h1.setAttribute('id', 'ageInDays')
    h1.appendChild(textAnswer)
    document.getElementById('flex-result').appendChild(h1)
    // console.log(AgeInDays)
}

function reset() {
    document.getElementById('ageInDays').remove();
}

//Challenge 2: Cat Generator

function GenerateCat() {
    var image = document.createElement('img')
    var div = document.getElementById('Flex-Cat-gen')
    image.src = "/Images/Cat2.jpg"
    image.setAttribute('id', 'ImgCat')
    div.appendChild(image)
}

function reset() {
    document.getElementById('ImgCat').remove();
}

//Challenge 3: Rock, Paper, Scissors
function rpsGame(yourChoice) {
    console.log(yourChoice)

    var humanChoice, botChoice;
    humanChoice = yourChoice.id;

    botChoice = numberTochoice(randomRps())
    console.log('compChoice', botChoice);

    results = decideWinner(humanChoice, botChoice)
    console.log(results)

    message = finalMessage(results)
    console.log(message)
    rpsFrontend(yourChoice.id, botChoice, message)
}

function randomRps() {
    return Math.floor(Math.random() * 3);
}

function numberTochoice(number) {
    return ['rock', 'paper', 'scissors'][number];
}

function decideWinner(yourChoice, computerChoice) {
    var rpsDatabase = {
        'rock': { 'scissors': 1, 'rock': 0.5, 'paper': 0 },
        'paper': { 'rock': 1, 'paper': 0.5, 'scissors': 0 },
        'scissors': { 'paper': 1, 'scissors': 0.5, 'rock': 0 },
    };

    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore, computerScore];
};

function finalMessage([yourScore, computerScore]) {
    if (yourScore === 0) {
        return { 'message': 'You Lost!', 'color': 'red' };
    }
    else if (yourScore === 0.5) {
        return { 'message': 'You Tied!', 'color': 'yellow' };
    }
    else {
        return { 'message': 'You Won!', 'color': 'green' };
    }
}

function rpsFrontend(humanImgChoice, botImgChoice, finalMessage) {
    var imgDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src,
    }

    // let's remove all the images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imgDatabase[humanImgChoice] + "' height =150 width =150 style='box-shadow:0px 0px 20px 0px #28bef9;' >"
    messageDiv.innerHTML = "<h1 style='color:" + finalMessage['color'] + "; font-size:60px; padding:30px; '>" + finalMessage['message'] + "</h1>"
    botDiv.innerHTML = "<img src='" + imgDatabase[botImgChoice] + "' height =150 width =150 style='box-shadow:0px 0px 20px 0px #ff2525;' >"

    document.getElementById('flex-rps-div').appendChild(humanDiv)
    document.getElementById('flex-rps-div').appendChild(messageDiv)
    document.getElementById('flex-rps-div').appendChild(botDiv)
}

function restart() {
    window.location.reload()
}

// challenge 4 : Change all the color of the buttons
var all_buttons = document.getElementsByTagName('button')

var copyAllButtons = [];
for (let i = 0; i < all_buttons.length; i++) {
    copyAllButtons.push(all_buttons[i].classList[1])
};

function buttonColorchange(buttonThingy) {
    if (buttonThingy.value === 'red') {
        buttonsRed();
    }
    else if (buttonThingy.value === 'green') {
        buttonsGreen();
    }
    else if (buttonThingy.value === 'reset') {
        buttonsReset();
    }
    else if (buttonThingy.value === 'random') {
        buttonsRandom();
    }
}

function buttonsRed() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}
function buttonsYellow() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-warning');
    }
    elements = document.getElementsByTagName('div');
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.textShadow = "-7px 3px 12px #fbdc00";
    }
    //    document.getElementsByClassName('container-4').style.background = '#ffc10733';
}
function buttonsGreen() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}
function buttonsReset() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
    elements = document.getElementsByTagName('div');
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.textShadow = "none";
    }
}

function buttonsRandom() {
    let choices = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning'];

    for (let i = 0; i < all_buttons.length; i++) {
        let randomnumber = Math.floor(Math.random() * 4);
        all_buttons[i].classList.remove(all_buttons[i].classList[1])
        all_buttons[i].classList.add(choices[randomnumber])
    }
}

// Challenge 5 : Blackjack
let blackjackGame = {
    'you': { 'scoreSpan': '#your-blackjack-result', 'div': '#your-box', 'score': 0 },
    'dealer': { 'scoreSpan': '#dealer-blackjack-result', 'div': '#dealer-box', 'score': 0 },
    'cards': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
    'cardsMap': { '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'J': 10, 'Q': 10, 'K': 10, 'A': [1, 11] },
    'wins': 0,
    'losses': 0,
    'draws': 0,
    'isStand': false,
    'turnsOver': false,
}

const YOU = blackjackGame['you']
const DEALER = blackjackGame['dealer']

const hitSound = new Audio('sounds/swish.m4a')
const winSound = new Audio('sounds/cash.mp3')
const lossSound = new Audio('sounds/aww.mp3')

document.querySelector('#hit-button').addEventListener('click', blackjackHit);
document.querySelector('#stand-button').addEventListener('click', dealerLogic);
document.querySelector('#deal-button').addEventListener('click', blackjackDeal);

function blackjackHit() {
    if (blackjackGame['isStand'] === false) {
        let card = randomCard();
        showCard(card, YOU);
        updateScore(card, YOU);
        showScore(YOU)
    }
}

function randomCard() {
    let randomIndex = Math.floor(Math.random() * 13);
    return blackjackGame['cards'][randomIndex];
}

function showCard(card, activePlayer) {
    if (activePlayer['score'] <= 21) {
        let cardImage = document.createElement('img')
        cardImage.src = `Images/${card}.png`;
        document.querySelector(activePlayer['div']).appendChild(cardImage)
        hitSound.play();
    }
}

function blackjackDeal() {
    if(blackjackGame['turnsOver'] === true) {

    blackjackGame['isStand'] = false;

    let yourImage = document.querySelector('#your-box').querySelectorAll('img');
    let dealerImage = document.querySelector('#dealer-box').querySelectorAll('img');

    for (i = 0; i < yourImage.length; i++) {
        yourImage[i].remove();
    }
    for (i = 0; i < dealerImage.length; i++) {
        dealerImage[i].remove();
    }

    YOU['score'] = 0;
    DEALER['score'] = 0;

    document.querySelector('#your-blackjack-result').textContent = 0;
    document.querySelector('#dealer-blackjack-result').textContent = 0;

    document.querySelector('#your-blackjack-result').style.color = 'white';
    document.querySelector('#dealer-blackjack-result').style.color = 'white';

    document.querySelector('#blackjack-result').textContent = "Let's Play";
    document.querySelector('#blackjack-result').style.color = 'black';

    blackjackGame['turnsOver'] = true;
 }
}

function updateScore(card, activePlayer) {
    if (card === 'A') {
        //If adding 11 keeps me below 21, add 11 ,otherwise, add 1
        if (activePlayer['score'] + blackjackGame['cardsMap'][card][1] <= 21) {
            activePlayer['score'] += blackjackGame['cardsMap'][card][1];
        }
        else {
            activePlayer['score'] += blackjackGame['cardsMap'][card][0];
        }
    }
    else {
        activePlayer['score'] += blackjackGame['cardsMap'][card]
    }
}

function showScore(activePlayer) {
    if (activePlayer['score'] > 21) {
        document.querySelector(activePlayer['scoreSpan']).textContent = 'BUST!';
        document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
    } else {
        document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
    }
}

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}

async function dealerLogic() {
    blackjackGame['isStand'] = true;

    while(DEALER['score']< 16 && blackjackGame['isStand'] === true)
    {  let card = randomCard();
        showCard(card, DEALER);
        updateScore(card, DEALER);
        showScore(DEALER);
        await sleep(700)
    }

    blackjackGame['turnsOver'] = true;
    let winner = computeWinner();
    showResult(winner);
    

}

//compute winner and return who just won
//update the wins, losses, draws
function computeWinner() {
    let winner;

    if (YOU['score'] <= 21) {
        if (YOU['score'] > DEALER['score'] || DEALER['score'] > 21) {
            blackjackGame['wins']++;
            winner = YOU;
        }
        else if (YOU['score'] < DEALER['score']) {
            blackjackGame['losses']++;
            winner = DEALER;
        }
        else if (YOU['score'] === DEALER['score']) {
            blackjackGame['draws']++;
        }
    }
    //condition: when user bust but dealer doesn't
    else if (YOU['score'] > 21 && DEALER['score'] <= 21) {
        blackjackGame['losses']++;
        winner = DEALER;
    }
    //condition: when you and the dealer both busts
    else if (YOU['score'] > 21 && DEALER['score'] > 21) {
        blackjackGame['draws']++;
    }
    console.log(blackjackGame)
    return winner;
}

function showResult(winner) {
    let message, messageColor;

    if(blackjackGame['turnsOver'] === true){

        if (winner === YOU) {
            document.querySelector('#wins').textContent = blackjackGame['wins']
            message = 'You won!';
            messageColor = 'green';
            winSound.play();
        }
        else if (winner === DEALER) {
            document.querySelector('#losses').textContent = blackjackGame['losses']
            message = 'You lost!';
            messageColor = 'red';
            lossSound.play();
        }
        else {
            document.querySelector('#draws').textContent = blackjackGame['draws']
            message = 'You drew!';
            messageColor = 'black';
        }

        document.querySelector('#blackjack-result').textContent = message;
        document.querySelector('#blackjack-result').style.color = messageColor;
    }
}








