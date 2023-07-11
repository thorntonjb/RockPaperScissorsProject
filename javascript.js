function getComputerChoice()
{
    let choice = Math.floor(Math.random() * 3 + 1);
    console.log(choice);
    let textChoice = "";
    if (choice == 1)
    {
        textChoice = "rock";
    }
    else if (choice == 2)
    {
        textChoice = "paper";
    }
    else // (choice == 3)
    {
        textChoice = "scissors";
    }

    return textChoice;
}

function startGame(playerSelection, computerSelection)
{
    //playerSelection = prompt("What do you choose?");
    console.log("   you chose " + playerSelection);

    console.log("   computer chose " + computerSelection);
    if (playerSelection  == "rock")
    {
        if (computerSelection  == "paper")
        {
            return "you lose";
        }
        if (computerSelection  == "scissors")
        {
            return "you win";
        }
    }
    if (playerSelection  == "paper")
    {
        if (computerSelection  == "rock")
        {
            return "you win";
        }
        if (computerSelection  == "scissors")
        {
            return "you lose";
        }
    }
    if (playerSelection  == "scissors")
    {
        if (computerSelection  == "paper")
        {
            return "you win";
        }
        if (computerSelection  == "rock")
        {
            return "you lose";
        }
    }
    if (playerSelection  == computerSelection)
    {
        return "tie";
    }

}

function game()
{
    const playerSelection = "rock";
    for(let i = 0; i < 5; i++)
    {
        computerSelection = getComputerChoice();
        console.log(startGame(playerSelection, computerSelection));
    }
}

console.log("Welcome to RPS!");
game();

