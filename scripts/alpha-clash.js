// function play(){
//     //hide the home screen by adding hidden class in home screen
//     const homeScreen= document.getElementById('home');
//     //homeScreen.classList prints all the classes in the section
//     homeScreen.classList.add('hidden');
    
//     const playSection= document.getElementById('play');
//     playSection.classList.remove('hidden');

//     //show the play ground
// }

function handleKeyboardKeyUpEvent(event){
    const playerPressed= event.key;

    const currentAlphabetElement=document.getElementById('current-alphabet');
    const currentAlphabet=currentAlphabetElement.innerText;
    const expectedAlphabet=currentAlphabet.toLowerCase();

    console.log(playerPressed,expectedAlphabet);

    if(playerPressed === expectedAlphabet){
        console.log('You won a point');
        
        //update score
        // const currentScoreElement=document.getElementById('current-score');
        // const currentScoreText=currentScoreElement.innerText;
        // const currentScore= parseInt(currentScoreText);

        // const newScore= currentScore+1;
        // currentScoreElement.innerText=newScore;
        const currentScore= getTextElementValueById('current-score');
        const newScore= currentScore+1;
        setTextElementValueById('current-score',newScore);

        // start new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }else{
        console.log('You lost a life');

        // update life
        // const currentLifeElement=document.getElementById('current-life');
        // const currentLifeText=currentLifeElement.innerText;
        // const currentLife=parseInt(currentLifeText);
        // const newLife=currentLife-1;
        // currentLifeElement.innerText=newLife;
        const currentLife=getTextElementValueById('current-life');
        const newLife=currentLife-1;
        setTextElementValueById('current-life',newLife);

        if(newLife === 0){
            gameOver();
        }
    }
}

document.addEventListener('keyup',handleKeyboardKeyUpEvent);



function continueGame(){
    // step -1 : generate a random alphabet
    const letter= getRandomAlphabet();
    
    // show the alphabet on the UI
    const currentAlphabetElement=document.getElementById('current-alphabet');
    currentAlphabetElement.innerText=letter;
    setBackgroundColorById(letter);
}

function play(){
    //hide all section except playground
    hideElementsById('home');
    hideElementsById('score')
    showElementById('play');
    
    // reset score and life
    setTextElementValueById('current-score',0);
    setTextElementValueById('current-life',5);
    
    continueGame();

}

function gameOver(){
    hideElementsById('play');
    showElementById('score');

    //update final score
    const lastScore= getTextElementValueById('current-score');
    setTextElementValueById('game-score',lastScore);
    
    //clear the ;ast selected alphabet
}
