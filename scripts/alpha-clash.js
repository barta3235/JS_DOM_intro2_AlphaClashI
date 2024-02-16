// function play(){
//     //hide the home screen by adding hidden class in home screen
//     const homeScreen= document.getElementById('home');
//     //homeScreen.classList prints all the classes in the section
//     homeScreen.classList.add('hidden');
    
//     const playSection= document.getElementById('play');
//     playSection.classList.remove('hidden');

//     //show the play ground
// }


function continueGame(){
    // step -1 : generate a random alphabet
    const letter= getRandomAlphabet();
    
    // show the alphabet on the UI
    const currentAlphabetElement=document.getElementById('current-alphabet');
    currentAlphabetElement.innerText=letter;
    console.log(letter);
    setBackgroundColorById(letter);
}

function play(){
    hideElementsById('home');
    showElementById('play');
    continueGame();
}