function getComputerChoice()
{
    let choice = Math.floor(Math.random * 3) + 1;
    if (choice == 1)
    {
        return "Rock";
    }
    else if (choice == 2)
    {
        return "Paper";
    }
    else 
    {
        return "Scissors";
    }
}

console.log("Welcome to RPS!");
function startGame(playerSelection, computerSelection)
{
    playerSelection = prompt("What do you choose?");
    console.log("you chose " + playerSelection);

    computerSelection = getComputerChoice();
    console.log("computer chose " + computerSelection.toLowerCase());
    if (playerSelection.toLowerCase() == "rock")
    {
        if (computerSelection.toLowerCase() == "paper")
        {
            console.log("you lose");
        }
        if (computerSelection.toLowerCase() == "scissors")
        {
            console.log("you win");
        }
    }
    if (playerSelection.toLowerCase() == "paper")
    {
        if (computerSelection.toLowerCase() == "rock")
        {
            console.log("you win");
        }
        if (computerSelection.toLowerCase() == "scissors")
        {
            console.log("you lose");
        }
    }
    if (playerSelection.toLowerCase() == "scissors")
    {
        if (computerSelection.toLowerCase() == "paper")
        {
            console.log("you win");
        }
        if (computerSelection.toLowerCase() == "rock")
        {
            console.log("you lose");
        }
    }
    if (playerSelection.toLowerCase() == computerSelection.toLowerCase())
    {
        console.log("tie");
    }

}

function game()
{
    for(let i = 0; i < 5; i++)
    {
        startGame();
    }
}

game();

