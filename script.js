// Typing Effect

const words = [
    "Developer",
    "Designer",
    "Creator",
    "Freelancer"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!isDeleting) {
        document.querySelector(".typing").textContent =
            currentWord.substring(0, charIndex++);
    } else {
        document.querySelector(".typing").textContent =
            currentWord.substring(0, charIndex--);
    }

    if (charIndex === currentWord.length + 1) {
        isDeleting = true;
        setTimeout(typeEffect, 1000);
        return;
    }

    if (charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect, isDeleting ? 60 : 120);
}

typeEffect();


// Button Interaction

function showMessage() {
    alert("🚀 Welcome to the Interactive Website!");
}


// Counter Animation

let count = 0;
const target = 5000;

const counter = setInterval(() => {

    count += 50;

    document.getElementById("count").textContent = count;

    if (count >= target) {
        clearInterval(counter);
    }

}, 20);


// Floating Bubbles Background

for (let i = 0; i < 20; i++) {

    const bubble = document.createElement("div");

    bubble.classList.add("bubble");

    const size = Math.random() * 60 + 20;

    bubble.style.width = size + "px";
    bubble.style.height = size + "px";
    bubble.style.left = Math.random() * 100 + "%";
    bubble.style.animationDuration =
        Math.random() * 10 + 8 + "s";

    document.body.appendChild(bubble);
}