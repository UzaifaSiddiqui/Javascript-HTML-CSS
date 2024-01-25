let userScore = 0;
let compUser = 0;

let choices = document.querySelectorAll(".choice");
console.log(choices);

let generateCompChoice = ()=>{
    let hand =["rock","paper","scissor"];
    let index = Math.floor(Math.random()*3);
    return(hand[index]);
}

let draw =()=>{
    let message = document.querySelector("#msg");
    message.innerText = "It is a draw!";
}
let winner =(userWin,userChoice,compChoice)=>{
    if (userWin){
        console.log("You Win",userChoice,compChoice);
    }else{
        console.log("You Lose",userChoice,compChoice);
    }

}
let updateScore =(userWin)=>{
    let userScore = document.querySelector("#user-score");
    let compScore = document.querySelector("#comp-score");
    if (userWin){ ;
        let newUserScore = Number(userScore.innerText) + 1; 
        userScore.innerText = String(newUserScore);
    }else{
        let newCompScore = Number(compScore.innerText) + 1;
        compScore.innerText = String(newCompScore);
    }
}
let updateText = (userWin,compChoice)=>{
    let message = document.querySelector("#msg");
    if (userWin){
        message.innerText = `You Win! Computer chose ${compChoice}`;
    }else{
        message.innerText = `You Lose! Computer chose ${compChoice}`;
    }
}
let gamePlay =(userChoice,compChoice)=>{
    if (userChoice === compChoice){
        draw();
    }else{
        let userWin = true;
        if (userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
            updateScore(userWin);
            updateText(userWin,compChoice);
        }
        else if (userChoice === "scissor"){
            userWin = compChoice === "rock" ? false : true;
            updateScore(userWin);
            updateText(userWin,compChoice);
        }
        else{
            userWin = compChoice === "scissor" ? false : true;
            updateScore(userWin);
            updateText(userWin,compChoice);
        }
        winner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let id = choice.getAttribute("id");
        let userChoice = id;
        let compChoice = generateCompChoice();
        gamePlay(userChoice,compChoice);
/*         console.log(document.querySelector("#user-score").innerText);
        console.log(document.querySelector("#comp-score").innerText) */
    })
})

