// 1 Завдання

const firstMessages = document.querySelector(".first-messages");
const firstButton = document.querySelector(".first-button");

const firstMessagesArray = ["Hello!", "How are you?", "Do you know JavaScript?", "Do you speak English?", "Goodbye!"];

let firstMessagesIndex = 0;

firstButton.addEventListener("click", () => {
    const firstMessagesInterval = setInterval(() => {
        firstMessages.textContent = firstMessagesArray[firstMessagesIndex];
        firstMessagesIndex += 1;
        if (firstMessagesIndex === firstMessagesArray.length) {
            clearInterval(firstMessagesInterval);
            firstMessagesIndex = 0;
        }
    }, 1000);
});

// 2 Завдання

const secondbox = document.querySelector(".box");
const secondBoxChildren = secondbox.children;

const secondColors = ["blueviolet", "golden", "firebrick", "seagreen", "teal"];
const secondSizes = ["300px", "10px", "120px", "90px", "180px"];

let secondIndex = 0;

const secondInterval = setInterval(() => {
    for (let el of secondBoxChildren) {
        secondIndex += 1;
        if (secondIndex === 5) {
            secondIndex = 0;
        };
        el.style.backgroundColor = `${secondColors[secondIndex]}`;
        el.style.width = `${secondSizes[secondIndex]}`;
    };
}, 2000);


// 3 Завдання

const clickBox = document.querySelector('.clickingEl');
const clickedText = document.querySelector('.clickedText');

let thirdScore = 0;
let thirdTimeLeft = 5;
let thirdTimerStarted = false;

function startTimer() {
    thirdTimerStarted = true;

    const interval = setInterval(() => {
        thirdTimeLeft -= 1;
        if (thirdTimeLeft <= 0) {
            clearInterval(interval);
            clickBox.style.pointerEvents = 'none';
            clickBox.textContent = 'Game Over!';
        }
    }, 1000);
}

clickBox.addEventListener('click', () => {
    if (!thirdTimerStarted) startTimer();
    if (thirdTimeLeft > 0) {
        thirdScore += 1;
        clickedText.textContent = `Your Clicks:${thirdScore}`;
    }
});

// 4 Завдання

const input = document.getElementById('timeInput');

input.addEventListener('change', () => {
    const seconds = input.value.trim();

    if (!isNaN(seconds) && seconds > 0) {
        setTimeout(() => {
            alert("Час вийшов!");
        }, seconds * 1000);
    } else {
        alert("Будь ласка, введіть коректне число більше нуля.");
    }
});
