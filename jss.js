let userScore =0;
let compScore =0;

const  userChoice = document.querySelectorAll(".choice");

const getComputerChoice = () => {
    const arr = ["rock","paper","scissor"];
     const rand =Math.floor(Math.random() * 3);
     return arr[rand];
}
const compChoice = document.getElementById("button");

const drawFucn = () => {
    compChoice.innerText = "Match Drawn";
    compChoice.style.backgroundColor = "grey";
}
const youWon = () => {
    compChoice.innerText = "You won dude";
    compChoice.style.backgroundColor = "green";
    userScore++;
    document.getElementById("you").innerText = userScore;
}
const compWon =() => {
    compChoice.innerText = "comp won";
    compChoice.style.backgroundColor = "red";
    compScore++;
    document.getElementById("comp").innerText = compScore;
}

userChoice.forEach((choice) =>{
    choice.addEventListener("click" ,() => {
        const a =  choice.getAttribute("id");
        console.log("you choose",a);
        const b = getComputerChoice();
        if(a==b) {
            drawFucn();
            return; //stop further checks   
        }
        if(a=="rock") {
            if(b=="paper") {
                compWon();
            }
            else {
                youWon();

            }
        }
        else if(a=="paper") {
            if(b=="scissor") {
                compWon();
            }
            else {
                youWon();
            }
        }
        else if(a=="scissor")  {
            if(b=="rock") {
                compWon();
            }
            else {
                youWon();
            }
        }
    });
});
