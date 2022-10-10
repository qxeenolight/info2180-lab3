onload = function(){
    //Variable Declarations
    let board = document.getElementById("board");
    let boxes = board.querySelectorAll("div");

    //Excercise 1
    boxes.forEach(function(elem, index, list) {
        elem.setAttribute("class", "square");
        console.log("jah");
    });
}