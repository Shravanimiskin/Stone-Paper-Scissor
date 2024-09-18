let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara= document.querySelector("#user-score");
const compScorePara= document.querySelector("#computer-score");

const genComputerChoice=()=>
{
   //rock paper sciccors;
   const options=["rock","paper","scissor"];
   const randomIndex= Math.floor(Math.random()*3);
   return options[randomIndex];
};

const drawGame=()=>
{
    // console.log("Draw Game.");
    msg.innerText="Its a Draw! Play again";
    msg.style.backgroundColor="#081b31";
}

const showWinner=(userWin, userChoice,compChoice)=>
{
    if(userWin)
    {
        userScore++;
        userScorePara.innerText=userScore;
        console.log("Congratulation! You Win");
        msg.innerText=`Congratulations! You Win. Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";

    }
    else
    {
        compScore++;
        compScorePara.innerText=compScore;
        console.log("OOPS! You Lose");
        msg.innerText=`OOPS! You Lose. ${compChoice} beats  your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame=(userChoice)=>
{
   console.log("user choice=",userChoice);
   //generate computer choice
   const compChoice=genComputerChoice();
   console.log("compu choice=",compChoice);

   if(userChoice===compChoice)
   {
    //draw
    drawGame();
   }
   else
   {
    let userWin=true;
    if(userChoice==="rock")
    {
        //scissors,paper
        userWin= compChoice==="paper" ? false: true;
    }
    else if(userChoice==="paper")
    {
        //rock,scissors
        userWin=compChoice==="scissor" ? false:true;
    }
    else
    {
        // rock,paper
       userWin= compChoice==="rock" ?false:true;
    }
    showWinner(userWin,userChoice,compChoice);
   }
};

choices.forEach((choice)=>
{
   
    choice.addEventListener("click",()=>
    {
        const userChoice=choice.getAttribute("id"); 
        
         playGame(userChoice);

    });
});