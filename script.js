function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1; 
}

function getPlayerGuess() {
    let guess;

    while (true) {
        guess = prompt("Guess a number between 1 and 100 (Cancel to quit):");

        if (guess === null){
            const confirmExit = confirm("Are you sure you want to quit the game?");
            
            if (confirmExit) {
                return null ; // signal exit
            } else {
                continue; // go back to game
            }}
            
        if (guess.trim() === "") {
            alert("Input cannot be empty!");
        }
        else {
            // Change to number type
            guess = Number(guess);
            
            //Validation
            if (isNaN(guess)) { // if user enters something that is not a number
                alert("Invalid input! Please do not enter symbols like !#$%^&*().");
            } 
            else if (!Number.isInteger(guess)) { // if user enters a decimal number
                alert("Please enter a whole number (no decimals).");
            } 
            else if (guess < 0) { // if user enters a negative number
                alert("Negative numbers are not allowed.");
            } 
            else if (guess === 0) { // if user enters 0
                alert("0 is not allowed!");
            } 
            else if (guess > 100) { // if user enters a number greater than 100
                alert("Please enter a number between 1 and 100.");
            }  
            else {
                return guess;
            }
        }
    }
}

function checkGuess(playerGuess, randomNumber) {
    if (playerGuess < randomNumber) {
        return "Too low! Try again.";
    } else if (playerGuess > randomNumber) {
        return "Too high! Try again.";
    } else {
        return "Congratulations! You've guessed the number!";
    }
}

function game() {
    const randomNumber = generateRandomNumber();
    let attempts = 0;
    const maxAttempts = 10;

    // introduction
    console.log("Welcome to the Number Guessing Game!");
    console.log(`You have ${maxAttempts} attempts to guess the number.`);
    alert(`Welcome to the Number Guessing Game!\nYou have ${maxAttempts} attempts to guess the number between 1 and 100.`);
    // bonus tracker
    let hasWon = false;

    while (attempts < maxAttempts) {
        const playerGuess = getPlayerGuess();
        
        // If user chose to exit
        if (playerGuess === null) {
        alert("You exited the game.");
        console.log("Game exited by user.");
        return; // stop the game completely
        }

        attempts++;        
        const result = checkGuess(playerGuess, randomNumber);
                
        if (result === "Too low! Try again.") {
            console.log(`Attempt ${attempts}: ${playerGuess} is too low.`);
            alert(`Attempt ${attempts}: ${playerGuess} is too low.`);
        } else if (result === "Too high! Try again.") {
            console.log(`Attempt ${attempts}: ${playerGuess} is too high.`);
            alert(`Attempt ${attempts}: ${playerGuess} is too high.`);
        } else {
            console.log(`Attempt ${attempts}: ${playerGuess} is correct!`);
            hasWon = true;
            break;
        }
    }

    // bonus notification and score calculation
    if (hasWon) {
        let score = (maxAttempts - attempts + 1) * 10;
        console.log(`\nYou won in ${attempts} attempts!`);
        console.log(`Your score: ${score} points (max ${maxAttempts * 10})`);
        alert(`You won in ${attempts} attempts!\nYour score: ${score} points`);
    } else {
        console.log(`Game Over! You used all ${maxAttempts} attempts.`);
        console.log(`The correct number was: ${randomNumber}`);
        console.log(`Attempts used: ${maxAttempts}`);
        console.log(`Your score: 0 points (no correct guess)`);
        alert(`Game Over! The number was ${randomNumber}.\nAttempts used: ${maxAttempts}\nYour score: 0 points`);
    }
}

//run function to start the game
game();