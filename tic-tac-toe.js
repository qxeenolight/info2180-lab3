"use strict";
onload = function(){
    //Variable Declarations
    let board = document.getElementById("board");
    let boxes = board.querySelectorAll("div");
    const newGame = document.querySelector(".btn");
    let play = true;

    //Array to keep track of where each player is
    let gameState = ["", "", "", "", "", "", "", "", ""];

    //Array to record all winning conditions of the game
    let winLog =[   [0,1,2], [3,4,5],
                    [6,7,8], [0,4,8],
                    [2,4,6], [0,3,6],
                    [2,5,8], [1,4,7]];

    //Counter to keep track of each play to see if it is even(X) or odd(O)
    let counter = 0;

    //Excercise 5 - resetting game
    newGame.addEventListener("click", e =>{
        location.reload();
    });

    //Excercise 1 - displaying grid
    boxes.forEach(function(elem, index) {
        elem.setAttribute("class", "square");

            //Excercise 2 - allowing X and O placement in grid
            elem.addEventListener("click", function(){

            if(counter%2===0 && elem.innerHTML===""){
                if(play!=false){
                    elem.innerHTML="X";
                    elem.classList.add("square", "X");

                    counter++;
                    gameState[index]="X";
                    check();
                }
            }

            else if(counter%2===1 && elem.innerHTML===""){
                if(play!=false){
                    elem.innerHTML="O";
                    elem.classList.add("square", "O");

                    counter++;
                    gameState[index]="O";
                    check();
                }
            }
        }); 
        
        //Excercise 3 - adding and removing hover effects
        elem.addEventListener("mouseover", function(){
            this.classList.add("hover");
        });

        elem.addEventListener("mouseout", function(){
            this.classList.remove("hover");
        });
    });

    //Excercise 4 - checking who wins a match
    function check(){
        for(let i=0; i<8; i++){
            let winState = winLog[i];

            let pos1 = gameState[winState[0]];
            let pos2 = gameState[winState[1]];
            let pos3 = gameState[winState[2]];

            if(pos1==="" || pos2==="" || pos3===""){
                continue; 
            }
            else if(pos1===pos2 && pos2===pos3){
                let statUpdate = document.getElementById("status");
                if(pos1==="X"){
                    statUpdate.innerHTML = "Congratulations! X is the winner!";
                }
                else if(pos1==="O"){
                    statUpdate.innerHTML = "Congratulations! O is the winner!";
                }   
                statUpdate.classList.add("status", "you-won");
                play = false;
                break;
            }
        }
    }
}   