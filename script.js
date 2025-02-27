const words = ["a Cybersecurity Analyst", "a Web Developer", "an SQL Expert", "a Data Analyst"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let isWaiting = false;
const dynamicText = document.getElementById("dynamic-text");

function type() {
    const currentWord = words[wordIndex];

    if (isWaiting) {
        setTimeout(() => {
            isWaiting = false;
            type();
        }, 2000); //wait for 2 seconds before deleting
        return;
    }

    if (isDeleting) {
        dynamicText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
    } else {
        dynamicText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === currentWord.length) {
            isDeleting = true;
            isWaiting = true;
        }
    }
    setTimeout(type, isDeleting ? 20 : 50);
}

document.addEventListener("DOMContentLoaded", () => {
    type();
});

document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");

    menuToggle.addEventListener("click", () => {
        menu.classList.toggle("active");
    });
    const navlink= document.querySelectorAll ('ul li a');
    for (var i=0; i<navlink; i++);
    navlink[i].addEventListener("click", () => {
        menu.classList.remove("active")
});
})