let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newgamebtn = document.querySelector("#newgame");
let msgcon = document.querySelector(".msg-container");
let massage = document.querySelector("#msg");
let turnO = true;
const winPattern = [
     [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const reset = () => {
    turnO = true;
    enable();
    msgcon.classList.add("hide");
}

boxes.forEach ((box) =>{
     box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }else{
            box.innerText = "X"
            turnO = true;
        }
        box.disable = true;
        checkWinner();
    });
});
const disable = () => {
    for(let box of boxes){
        box.disable = true;
    }
}
const enable = () => {
    for(let box of boxes){
        box.enable = false;
        box.innerText = "";
    }
}
const showwinner = (winner) => {
    massage.innerText = `Congretulation, Winner is ${winner}`;
    msgcon.classList.remove("hide");
    disable();
    
}
const checkWinner = () => {
    for(let pattern of winPattern){

        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                console.log("winner",pos1);
                showwinner(pos1);
            }
        }


    }
}
newgamebtn.addEventListener("click",reset);
resetbtn.addEventListener("click",reset);