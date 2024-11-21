

function startt() {
   let hidee = document.querySelector('.btnn');
    hidee.style.display = 'none';
}


let turns = 0;
let correctNumber = Math.floor(Math.random() * 100) + 1;
let userGuess = "";


function restartt() {
    turns = 0;
    correctNumber = Math.floor(Math.random() * 100) + 1; // Reset the correct number
    userGuess = "";
    document.querySelector('.divv1 p').innerText = `${turns} TURNS`;
    document.querySelector('.que').innerText = '?';
}


function clearr() {
    userGuess = "";
    document.querySelector('.que').innerText = '?';
}


const numbers = document.querySelectorAll('.numm');
numbers.forEach(function(number) {
    number.onclick = function() {
        
        if (turns < 4) {
            userGuess += number.innerText;
            document.querySelector('.que').innerText = userGuess;
        }
    }
});


document.querySelectorAll('.divv3')[1].onclick = function() {
    if (turns < 4 && userGuess !== "") {
        turns++;
        document.querySelector('.divv1 p').innerText = `${turns} TURNS`;

        let guess = parseInt(userGuess);

        if (guess > correctNumber) {
           
            let popup = document.createElement('div');
            popup.classList.add('popup');
            popup.innerText = "Your number is too high!";
            document.body.appendChild(popup);
            setTimeout(() => popup.remove(), 2000);
        } else if (guess < correctNumber) {
           
            let popup = document.createElement('div');
            popup.classList.add('popup');
            popup.innerText = "Your number is too low!";
            document.body.appendChild(popup);
            setTimeout(() => popup.remove(), 2000);
        } else {
            
            let popup = document.createElement('div');
            popup.classList.add('popup');
            popup.innerText = "You win!";
            popup.style.backgroundColor = 'green';
            document.body.appendChild(popup);
            setTimeout(() => popup.remove(), 2000);
            restartt();
            return;
        }

        
        if (turns === 4 && guess !== correctNumber) {
            let popup = document.createElement('div');
            popup.classList.add('popup');
            popup.innerText = "You are out! The correct number was " + correctNumber;
            popup.style.backgroundColor = 'red';
            document.body.appendChild(popup);
            setTimeout(() => popup.remove(), 2000);
            restartt();
        }

        
        userGuess = "";
        document.querySelector('.que').innerText = '?';
    }
};
