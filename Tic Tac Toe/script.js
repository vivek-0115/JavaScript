let boxes = document.querySelectorAll(".box");
let winMsg = document.querySelector('#winMsg');
let winBox = document.querySelector('#winBox');
let reSet = document.querySelector('#reSet');
let newGame = document.querySelector('#newGame');
let count=0

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

const disableBox=()=>{
    for(let box of boxes){
        box.disabled=true
    }
};
const inableBox=()=>{
    for(let box of boxes){
        box.disabled=false
        box.innerText=''
    }
}

const resetGame= () => {
    turnO=true
    inableBox();
    winBox.classList.add('hide')
    count=0
}

const checkWin = ()=>{
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val!='' && pos2Val!='' && pos3Val!=''){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                disableBox();
                count=0
                winMsg.innerHTML=`Congratulation! <i>${pos1Val}</i> wins.`
                winBox.classList.remove('hide')
            }
        }
    }
}

let turnO=true
boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        if(turnO){
            box.innerText='O'
            turnO=false
        }
        else{
            box.innerText='X'
            turnO=true
        }
        count++
        box.disabled=true
        if(count>2){
            checkWin()
        }
        if(count===9){
            winMsg.innerText=`Match Draw.`
            winBox.classList.remove('hide')
            count=0
        }
    })
})

reSet.addEventListener('click',resetGame);
newGame.addEventListener('click',resetGame);