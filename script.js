//on buttons we hav eto perform the action
let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#message");
let signDecider=document.querySelectorAll(".player");
let indIcator=document.querySelector(".indicator");
let clickCount=0;
let player1=prompt("Enter player_1 name");
let player2=prompt("Enter player_2 name");


//important points of tic-tac-toe
// 1. kiski turn hai ye decide krna
// 2.turns alternate aaegi

const playerDetail=()=>{
    signDecider[0].innerText=`${player1}: O`;
    signDecider[1].innerText=`${player2}: X`;
    indIcator.classList.remove("hide");
    }
    
playerDetail();
let turn0=true;  //turn0 is true it means player0 ka turn hai

//storing winning patterns in 2-D array
let winPattern=[
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8]
];


//handling the click events

const resetGame=()=>{
    turn0=true;
    enableBoxes();
    msgContainer.classList.add("hide");
    indIcator.classList.add("hide");

}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turn0){
            box.innerText='O';
            turn0=false;
        }
        else{
            box.innerText='X';
            turn0=true;
        }
        box.disabled=true;//so that ek bar click hone ke bad box dobara click n ho taki game fair rhe
        checkWinner();//hr ek click ke bad winner check krna hoga 
    });
});

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner=(winner)=>{
    if(winner==='O'){
        msg.innerText=`Congratulations, Winner is ${player1}`;
    }
    else{
        msg.innerText=`Congratulations, Winner is ${player2}`; 
    }
    msgContainer.classList.remove("hide");
    disableBoxes();
}; 

const checkWinner=()=>{
    for(let pattern of winPattern){
                    let pos1val=boxes[pattern[0]].innerText;
                    let pos2val=boxes[pattern[1]].innerText;
                    let pos3val=boxes[pattern[2]].innerText;    
                    
                    if(pos1val!="" && pos2val!="" && pos3val!=""){
                      if((pos1val===pos2val) && (pos2val===pos3val)){
                        console.log("winner");
                        showWinner(pos1val);
                      }  
                    }
                    
            }
};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);