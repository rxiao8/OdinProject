//to generate a random number  between 0 and 3 (exclusive)
function compPlay(){
    let num = Math.floor(Math.random()* 3);
    if(num ===0){
       return "rock";
    }
    else if(num === 1){
        return "paper";
    }
    else{
        return "scissor"
    }
}

//play a single round of the game
function match(playerSelect, compSelect){
    //compare the two answers
    //outputs string for the winner
    const playerSelectLower = playerSelect.toLowerCase();
    var result = "";
    if(playerSelectLower === compSelect){
        //a tie
    }
    else if(playerSelectLower === "rock"){
        if(compSelect === "paper"){
            //player loses
            result = "lose";
        }
        else{
            //player wins
            result = "win";
        }
    }
    else if(playerSelectLower === "paper"){
        if(compSelect === "scissor"){
            //player loses
            result = "lose";
        }
        else{
            //player wins
            result = "win";
        }
    }
    else if(playerSelectLower === "scissor"){
        if(compSelect === "rock"){
            //player loses
            result = "lose";
        }
        else{
            //player wins
            result = "win";
        }
    }

    return result;
}


function game(){
    let playerScore = 0;
        let compScore = 0;
    for(let i = 0; i < 5; i++){
        var input = "";
        var valid = true;
        while(valid){
            input = prompt("What is your choice?");
            if (input !== "rock" && input !== "scissor" && input !=="paper"){
                input = prompt("Invalid input. Try again");
            }
            else{
                valid = false;
            }
        }

        const valInput = input;
        const compInput = compPlay();
        let result =  match(input, compInput);
  
        
        if(result === "win"){
           playerScore++;
        }else{
            compScore++;
        }

        console.log(`You ${result}! ${input} vs ${compInput} \n Player: ${playerScore} \n Computer ${compScore}`);
     
    }
}


// game();