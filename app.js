function playGame() {
    const secretNumber = Math.floor(Math.random() * 6) + 1;


    for (let i = 0; i < 2; i++) {
        const guess = parseInt(prompt("Enter your guess:"));
        if (guess === secretNumber) {
            if (i === 0) {
                alert("Congratulations! You guessed the secret number on your first try.");
                return 6;
            } else {
                alert("Congratulations! You guessed the secret number.");
                return 3;
            }
        } else {
            alert("Wrong guess. Try again!");
        }
    }

    alert("Sorry, you didn't guess the secret number. The secret number was: " + secretNumber);
    return 0;
}

const points = playGame();
alert("You scored " + points + " points.");
