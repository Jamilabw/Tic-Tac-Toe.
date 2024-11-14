console.log("Welocme to TicTacToe");
let turnMusic = new Audio("music.mp3");
let gamewin = new Audio("win.mp3");
let turn = "X";
let isgameover = false;
let resetMusic = new Audio("boom.wav");

// Fucntion to change the turn
const changeTurn = ()=>{
    return turn === "X"?"O":"X";
}

// Fucntion to check for a win
const checkwin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    wins.forEach((e)=>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText) &&  (boxtext[e[0]].innerText === boxtext[e[2]].innerText) &&boxtext[e[0]].innerText !== "" ){
            document.getElementsByClassName("info")[0].innerText = boxtext[e[0]].innerText + " Won";
            gamewin.play();
            isgameover = true;
            document.querySelector('.imgbox').getElementsByTagName("img")[0].style.width = "200px";
        }
        
        
        
    })
}

// Game logic
let boxes = document.querySelectorAll('.box');
// making all the boxes Array by using Array.from()
Array.from(boxes).forEach((element)=>{
    let boxtext = element.querySelector('.boxtext'); // selecting boxtext of individual elements of the box Array 
    element.addEventListener('click',()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            turnMusic.play();
            checkwin();
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
            
        }
    })
}) 


// Reset
let reset = document.querySelector('#reset');
reset.addEventListener('click',()=>{
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach((element)=>{
        element.innerText = "";
    })
    turn = "X";
    isgameover = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName("img")[0].style.width = 0;
    // resetMusic.play();
})

