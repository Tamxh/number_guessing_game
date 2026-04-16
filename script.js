function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1; 
}

function getPlayerGuess() {
    let guess;

    while (true) {
        guess = prompt("Guess a number between 1 and 100:");

        if (guess === null || guess.trim() === "") {
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

    console.log("Welcome to the Number Guessing Game!");
    console.log(`You have ${maxAttempts} attempts to guess the number.`);
    
    let hasWon = false;

    while (attempts < maxAttempts) {
        const playerGuess = getPlayerGuess();
        attempts++;        
        const result = checkGuess(playerGuess, randomNumber);
                
        if (result === "Too low! Try again.") {
            console.log(`Attempt ${attempts}: ${playerGuess} is too low.`);
        } else if (result === "Too high! Try again.") {
            console.log(`Attempt ${attempts}: ${playerGuess} is too high.`);
        } else {  // correct
            console.log(`Attempt ${attempts}: ${playerGuess} is correct!`);
            hasWon = true;
            break;
        }
    }

    if (hasWon) {
        console.log(`\nYou won in ${attempts} attempts!`);

        let score = (maxAttempts - attempts + 1) * 10;
        console.log(`Your score: ${score} points (max ${maxAttempts * 10})`);
    } else {
        console.log(`Game Over! You used all ${maxAttempts} attempts.`);
        console.log(`The correct number was: ${randomNumber}`);
        console.log(`Attempts used: ${maxAttempts}`);
        console.log(`Your score: 0 points (no correct guess)`);
    }
}

game();