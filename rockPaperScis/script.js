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

// //play a single round of the game
// function match(playerSelect, compSelect){
//     //compare the two answers
//     //outputs string for the winner
//     const playerSelectLower = playerSelect.toLowerCase();
//     var en = "";
//     if(playerSelectLower === compSelect){
//         //a tie
//     }
//     else if(playerSelectLower === "rock"){
//         if(compSelect === "paper"){
//             //player loses
//             en = "lose";
//         }
//         else{
//             //player wins
//             en = "win";
//         }
//     }
//     else if(playerSelectLower === "paper"){
//         if(compSelect === "scissor"){
//             //player loses
//             en = "lose";
//         }
//         else{
//             //player wins
//             en = "win";
//         }
//     }
//     else if(playerSelectLower === "scissor"){
//         if(compSelect === "rock"){
//             //player loses
//             en = "lose";
//         }
//         else{
//             //player wins
//             en = "win";
//         }
//     }

//     return en;
// }

//for each icon impose an event listener based on click
//when clicked,, retrieve icon id value
//compare the icon id value to the computer value
//when clicked,, have the icon stay scaled up and highlighted
function match(compSelect){
    //compare the two answers
    //outputs string for the winner
    const icons = document.querySelectorAll(".icons");
    var ending = "";
    var winner = "";
    var loser = "";
    icons.forEach(div => div.addEventListener("click", function(e){
        const val = this.getAttribute("id");
        // console.log(val);
        if(val === compSelect){
            //a tie
            return "It's a tie!";
    
        }
        else if(val === "rock"){
            if(compSelect === "paper"){
                //player loses
                ending = "lose";
                winner = "Paper";
                loser = "Rock"
            }
            else{
                //player wins
                ending = "win";
                winner = "Rock";
                loser = "Paper"
            }
        }
        else if(val === "paper"){
            if(compSelect === "scissor"){
                //player loses
                ending = "lose";
                winner = "Scissor";
                loser = "Paper"
            }
            else{
                //player wins
                ending = "win";
                winner = "Paper";
                loser = "Scissor"
            }
        }
        else if(val === "scissor"){
            if(compSelect === "rock"){
                //player loses
                ending = "lose";
                winner = "Rock";
                loser = "Scissor"
            }
            else{
                //player wins
                ending = "win";
                winner = "Scissor";
                loser = "Rock"
            }
        }
    
        
        return `You ${ending}. ${winner} beats ${loser}`;
 
    }));
    
}

function game(){
    let playerScore = 0;
        let compScore = 0;
   

        // const valInput = input;
        const compInput = compPlay();
        const msg = match(compInput);
        console.log(msg);

        // var secondWord = msg.split(' ')[1];
        
        // if(secondWord === "win"){
        //    playerScore++;
        // }else{
        //     compScore++;
        // }

        //      const result = document.querySelector(".results");
        // const div = document.createElement("div");
        // div.textContent = `${msg} \n Player: ${playerScore}     Computer: ${compScore}`;
        // results.appendChild(div);
        // // console.log(`You ${endi}! ${input} vs ${compInput} \n Player: ${playerScore} \n Computer ${compScore}`);
        
     
    // }
}


game();