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

function rpsFrontend(humanImgChoice, botImgChoice, finalMessage){
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
for(let i=0; i< all_buttons.length; i++){
    copyAllButtons.push(all_buttons[i].classList[1])
};

function buttonColorchange(buttonThingy){
   if( buttonThingy.value === 'red'){
       buttonsRed();
   }
   else if( buttonThingy.value === 'green'){
    buttonsGreen();
   }
   else if( buttonThingy.value === 'reset'){
    buttonsReset();
   }
   else if( buttonThingy.value === 'random'){
    buttonsRandom();
   }
}

function buttonsRed(){
   for(let i = 0;i<all_buttons.length;i++){
       all_buttons[i].classList.remove(all_buttons[i].classList[1]);
       all_buttons[i].classList.add('btn-danger');
   } 
}
function buttonsYellow(){
    for(let i = 0;i<all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-warning');
    } 
    elements = document.getElementsByTagName('div');
   for(let i = 0;i<elements.length;i++){
      elements[i].style.backgroundColor = "#ffc10733";
   } 
//    document.getElementsByClassName('container-4').style.background = '#ffc10733';
}
function buttonsGreen(){
   for(let i = 0;i<all_buttons.length;i++){
       all_buttons[i].classList.remove(all_buttons[i].classList[1]);
       all_buttons[i].classList.add('btn-success');
   } 
}
function buttonsReset(){
   for(let i = 0;i<all_buttons.length;i++){
       all_buttons[i].classList.remove(all_buttons[i].classList[1]);
       all_buttons[i].classList.add(copyAllButtons[i]);
   } 
   elements = document.getElementsByTagName('div');
   for(let i = 0;i<elements.length;i++){
      elements[i].style.backgroundColor = "white";
   } 
}

function buttonsRandom(){
    let choices = ['btn-primary','btn-danger','btn-success','btn-warning'];

    for(let i=0;i<all_buttons.length;i++){
        let randomnumber = Math.floor(Math.random()*4);
        all_buttons[i].classList.remove(all_buttons[i].classList[1])
        all_buttons[i].classList.add(choices[randomnumber])
    }
}