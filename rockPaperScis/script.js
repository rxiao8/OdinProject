// console.log(match("rock"));

//to generate a random number  between 0 and 3 (exclusive)
//returns the move associated with the number
function compPlay(){
    let num = Math.floor(Math.random()* 3);
    if(num === 0){
       return "rock";
    }
    else if(num === 1){
        return "paper";
    }
    else{
        return "scissor"
    }
}


//makes the victory message
function score(text){
    const div = document.querySelector(".results");
    div.textContent = "";
    div.textContent = text;

}

//checks to see who won
function check(val, compSelect){
       
        var ending = "";
        var winner = "";
        var loser = "";
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
        else {
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
    
}

function removeTransition(e){
    const child = document.querySelector(".text-container");
 if(child.textContent !== ""){
    textContent = "";
 }
}

//applies the click event to each button
function match(){
    const icons = document.querySelectorAll(".icons"); 
         let playerScore = 0;
        let compScore = 0;

    icons.forEach(div => div.addEventListener("click", function(e){
        const val = this.getAttribute("id");
        var msg = check(val, compPlay());
        
        //updates the scores by seeing if you won or lost
         var secondWord = msg.split(' ')[1];
         console.log(secondWord)
        if(secondWord === "win."){
           playerScore++;
        }else if(secondWord === "lose."){
            compScore++;
        }
        msg = msg + `\n Player: ${playerScore}     Computer: ${compScore}`;

        score(msg);

    
    }));


}

match();