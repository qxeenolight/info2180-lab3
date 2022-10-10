onload = function(){
    //Variable Declarations
    let board = document.getElementById("board");
    let boxes = board.querySelectorAll("div");

    //Array to keep track of where each player is
    let gameState = ["", "", "", "", "", "", "", "", ""];

    //Counter to keep track of each play to see if it is even(X) or odd(O)
    let counter = 0;

    //Excercise 1
    boxes.forEach(function(elem, index, list) {
        elem.setAttribute("class", "square");

        //Excercise 2
        elem.addEventListener("click", function(){

            if(counter%2===0 && elem.innerHTML===""){
                elem.innerHTML="X";
                elem.classList.add("square", "X");

                counter++;
                gameState[index]="X";
            }

            else if(counter%2===1 && elem.innerHTML===""){
                elem.innerHTML="O";
                elem.classList.add("square", "O");

                counter++;
                gameState[index]="O";
            }
        });    
    });
}