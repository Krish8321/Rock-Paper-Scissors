let userScore = 0 ;
let compScore = 0 ;
let userChoice = '';
let count = 0 ; // to track the winner

let rock = document.querySelector("#Rock");
let paper = document.querySelector("#Paper");
let scissor = document.querySelector("#Scissor");
let rstBtn = document.querySelector(".rst");
let userS = document.querySelector("#user-score");
let compS = document.querySelector("#computer-score");
let msg = document.querySelector("#msg");
let winMsg = document.querySelector("#winMsg"); // p tag with winner text
let wContainer = document.querySelector(".winner-msg") // div 

let newGame = document.querySelector(".new-game");

alert("Important Instruct!on ! \nThe winner will decides after 10 chances.")

rock.addEventListener("click" , () => {
    console.log("You Choose Rock");
    userChoice = 'Rock';
    count++;
    play();
    scores();
    winner();
} );

paper.addEventListener("click" , () => {
    console.log("You Choose Paper");
    userChoice = 'Paper' ;
    count++;
    play();
    scores();
    winner();
} );

scissor.addEventListener("click" , () => {
    console.log("You Choose Scissor");
    userChoice = 'Scissor';
    count++;
    play();
    scores();
    winner();
} );

//Scores Function :
let scores = ()  => {
    userS.innerText = `${userScore}`;
    compS.innerText = `${compScore}`;
};

// actual functioning of the game 
let play = () => {
    const choices = ['Rock', 'Paper', 'Scissor'];
    const compChoice = choices[Math.floor(Math.random() * 3)]; // this is a way to create a random choices using mathematical terms.

    if(userChoice === compChoice){
        msg.innerText = `Draw , both of you chose the ${userChoice}`;
        msg.style.backgroundColor = 'yellow';
    }

    else if(
        (userChoice === 'Rock' && compChoice === 'Scissor') ||
        (userChoice === 'Paper' && compChoice === 'Rock') ||
        (userChoice === 'Scissor' && compChoice === 'Paper')
    ){
        msg.innerText = `You Won , Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = 'green';
        userScore++;
    }

    else{
        msg.innerText = `Computer Wins ,Computers ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = 'red';
        compScore++;
    }
};

//reset Button Functioning 
let reset = () => {
    userScore = 0;
    compScore = 0;
    count = 0;
    userS.innerText = `${userScore}`;
    compS.innerText = `${compScore}`;
    msg.innerText = "Play your move";
    msg.style.backgroundColor = '#081b31';
    wContainer.classList.add("hide");
    enable();
};

// disable function 
let disable = () => {
    rock.disabled = true;
    paper.disabled = true;
    scissor.disabled = true;
}

//enable function
let enable = () => {
    rock.disabled = false;
    paper.disabled = false;
    scissor.disabled = false;    
}

rstBtn.addEventListener("click" , reset);
newGame.addEventListener("click" , reset);

// winner function 
let winner = () => {
    if(count > 9){
        if(userScore > compScore){
            winMsg.innerText = "🎉🎉Congratulations , You are the Winner !!!" ;
            wContainer.classList.remove("hide");
            disable();
        }
        else if(userScore === compScore){
            winMsg.innerText = "Match Is Drawn !!! ";
            wContainer.classList.remove("hide");
            disable();
        }
        else{
            winMsg.innerText = "😔😔 Oh'noo You Lose , Computer Won !!";
            wContainer.classList.remove("hide");
            disable();
        }
    }
};


// Everything is Done !!!!
