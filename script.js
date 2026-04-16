function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 100) + 1; 
    return randomNumber;
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
                alert("Congratulations! You've guessed the number!");
                return guess;
            }
        }
    }
}