const messages = [
    "Pwede ka na talaga makukong, try mo!",
    "Wishing you a day filled with joy! Walang joy kapag sa'kin",
    "May your dreams come true today!",
    "Cheers to another year of adventures! adventure ang makipag away sa'kin",
    "Enjoy your special day! Madapa ka sana"
];

const messageElement = document.querySelector(".message p");
const sendButton = document.getElementById("sendButton");
const birdAnimation = document.getElementById("birdAnimation");
let currentIndex = 0;

// Array of different GIF URLs
const birdGifs = [
    'https://media.tenor.com/kIhWscg5qmEAAAAi/akaruu-dance.gif',
    'https://media.tenor.com/T9QFRQxIKBIAAAAi/battle-pass.gif',
    'https://media.tenor.com/eWD0v1SeTY8AAAAi/hh.gif',
    'https://media.tenor.com/ZZigdphR7ZwAAAAC/funny-twerk.gif',
    'https://media.tenor.com/d4sPgSJml54AAAAC/opihomm-funny.gif',
    
    // Add more GIF URLs as needed
];

function getRandomGif() {
    const randomIndex = Math.floor(Math.random() * birdGifs.length);
    return birdGifs[randomIndex];
}

function displayNextMessage() {
    const currentMessage = messages[currentIndex];

    messageElement.style.opacity = 0; // Hide the current message with a fade-out effect

    setTimeout(() => {
        messageElement.textContent = currentMessage; // Update the message text
        // Show the new message with a fade-in effect
        setTimeout(() => {
            messageElement.style.opacity = 1;
        }, 100);
    }, 500); // Wait for "out" transitions to complete

    currentIndex = (currentIndex + 1) % messages.length;

    // Choose a random bird GIF and update the background
    const randomBirdGif = getRandomGif();
    birdAnimation.style.backgroundImage = `url('${randomBirdGif}')`;

    // Show the bird animation after a delay
    setTimeout(() => {
        birdAnimation.classList.remove("hidden");
    }, 3000); // Adjust the delay as needed
}

// Add a click event listener to the button
sendButton.addEventListener("click", () => {
    displayNextMessage(); // Show the next message and a random GIF on button click
});

// Initial call to display the first message and a random GIF
displayNextMessage();
