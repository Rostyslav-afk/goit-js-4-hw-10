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