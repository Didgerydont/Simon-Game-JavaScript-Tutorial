let order = [];
let playerOrder = [];
let flash;
let turn;
let good;
let compTurn;
let intervalId;
let strict = false;
let noise = true;
let on = false;
let win;

const turnCounter = document.querySelector("#turn"); 
const topLeft = document.querySelector("#topLeft"); 
const topRight = document.querySelector("#topRight"); 
const bottomLeft = document.querySelector("#bottomLeft"); 
const bottomRight = document.querySelector("#bottomRight"); 
const strictButton = document.querySelector("#strictButton"); 
const onButton = document.querySelector("#onButton"); 
const startButton = document.querySelector("#startButton"); 

strictButton.addEventListener('change', (event) => {
    if(strictButton.checked == true){
        strict = true;
    }
    else{
        strict = false;
    }
});

onButton.addEventListener('change', (event) => {
    if(onButton.checked == true){
        on = true;
        turnCounter.innerHTML="-";
    }
    else{
        on = false;
    }
});

