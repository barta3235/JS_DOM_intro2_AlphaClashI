function hideElementsById(elementId){
    const element=document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId){
    const element= document.getElementById(elementId);
    element.classList.remove('hidden');
}

function getRandomAlphabet(){
    const alphabetString='abcdefghijklmnopqrstuvwxyz';
    const alphabets= alphabetString.split('');

    // get a random index from 0 to 25 from alphabet
    const randomNumber= Math.random()*25;
    const index=Math.round(randomNumber);
    
    const alphabet= alphabets[index];
    return alphabet;
}

function setBackgroundColorById(elementId){
    const element=document.getElementById(elementId);
    element.classList.add('bg-orange-400');
    element.classList.add('text-white');
}


function removeBackgroundColorById(elementId){
    const element=document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
    element.classList.add('text-[black]');
}

function getTextElementValueById(elementId){
     const element= document.getElementById(elementId);
     const elementValueText= element.innerText;
     const value= parseInt(elementValueText);
     return value;
}

function setTextElementValueById(elementId,value){
      const element= document.getElementById(elementId);
      element.innerText=value;
}

function getElementTextById(elementId){
    const element=document.getElementById(elementId);
    const text= element.innerText;
    return text;
}