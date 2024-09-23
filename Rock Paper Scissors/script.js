const choices = document.querySelectorAll('.box');
const msg = document.querySelector("#message p");
const user = document.querySelector('#user');
const comp = document.querySelector('#comp');
let userScore = 0;
let compScore = 0;

const genChoice = () => {
    const option = ['rock','paper','scissors'];
    return option[Math.floor(Math.random()*3)];
}

const winner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++
        msg.innerText = `You Win! 😊 ${userChoice} beats ${compChoice}`
        user.innerText = `${userScore}`;
        msg.style.backgroundColor='rgb(9, 250, 9)'
    }
    else {
        compScore++
        msg.innerText = `You Lose! 😞 ${compChoice} beats ${userChoice}`
        comp.innerText = `${compScore}`;
        msg.style.backgroundColor='rgb(255, 80, 80)'
    }
}

const playGame = (userChoice) => {
    const compChoice = genChoice();

    if(userChoice === compChoice){
        msg.innerText = `Draw! 😒 You both choose ${userChoice}`
        msg.style.backgroundColor='rgb(8, 157, 250)'  
    } else {
        let userWin = true;

        if(userChoice === 'rock'){
            userWin = compChoice === 'paper' ? false : true;
        } else if(userChoice === 'paper'){
            userWin = compChoice === 'scissors' ? false : true;
        } else if(userChoice === 'scissors'){
            userWin = compChoice === 'rock' ? false : true;
        }
        winner(userWin, userChoice, compChoice);
    }
}

choices.forEach( choice => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute('id');
        playGame(userChoice);
    })
})