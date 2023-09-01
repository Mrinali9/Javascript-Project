let secretNumber = Math.trunc(20 * Math.random() + 1);
let highscore = 0;
let time = [0, 0];

document.querySelector('.again').addEventListener('click', function () {
    time = [0, 0];
    secretNumber = Math.trunc(20 * Math.random() + 1);
    document.querySelector('.score').textContent = '20';
    document.querySelector('.guess').value = '';
    document.getElementById('timer').innerHTML = '';
    document.querySelector('.check').style.backgroundColor = '#f1356d';
    document.getElementById('hiddenresult').textContent = '?'; // Reset the secret number display
});

document.querySelector('.check').addEventListener('click', () => {
    let guess = parseInt(document.querySelector('.guess').value, 10);
    let timer = setInterval(() => {
        time[1]++;
        if (time[1] % 60 == 0) {
            time[0]++;
        }
        document.getElementById('timer').innerHTML = ` ${time[0]} : ${time[1]} `;
    }, 1000);

    document.querySelector('.check').style.backgroundColor = 'black';

    if (!guess) {
        document.querySelector(".message").textContent = "Not a valid input";
    } else {
        document.getElementById('hiddenresult').textContent = secretNumber; // Display the secret number
        if (guess === secretNumber) {
            document.querySelector(".message").textContent = "You guessed it right";
            document.querySelector('.number').style.width = '30rem';
            document.querySelector("body").style.backgroundColor = 'green';
            document.querySelector('.number').textContent = secretNumber;
            if (highscore < parseInt(document.querySelector('.score').textContent, 10)) {
                highscore = parseInt(document.querySelector('.score').textContent, 10);
            }
            document.querySelector('.highscore').textContent = highscore;
        } else if (guess > secretNumber) {
            document.querySelector(".message").textContent = "Too high";
            document.querySelector('.score').textContent--;
        } else {
            document.querySelector(".message").textContent = "Too low";
            document.querySelector('.score').textContent--;
        }

        if (parseInt(document.querySelector('.score').textContent, 10) <= 0) {
            document.querySelector(".message").textContent = "You lost the game";
            clearInterval(timer);
            document.getElementById('timer').innerHTML = '';
        }
    }
});
