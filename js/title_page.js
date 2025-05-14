// Title page typewriter effect
const titleText = `
                    SCRIPT

                    A WEBSITE BY

                    AZURE ZHOU



                        CONTACT:
                        amysz{at}stanford{dot}edu`;

const typewriterElement = document.getElementById('titleTypewriter');
const cursorElement = document.getElementById('cursor');
// const enterButton = document.getElementById('enterButton');
const titlePage = document.getElementById('titlePage');
const pageContainer = document.getElementById('pageContainer');

let charIndex = 0;
let isTyping = true;

function typeWriter() {
    if (charIndex < titleText.length) {
        typewriterElement.textContent = titleText.substring(0, charIndex + 1);
        charIndex++;

        // Adjust cursor position to end of current text
        if (isTyping) {
            cursorElement.style.display = 'inline-block';
        }

        // Add random delay for realistic typing effect
        const randomDelay = Math.random() * 50 + 20; // 20-70ms
        setTimeout(typeWriter, randomDelay);
    } else {
        // Show enter button when typing is complete
        // enterButton.classList.add('visible');
        isTyping = false;
    }
}

// Start typewriter effect on page load
window.addEventListener('load', typeWriter);

// Enter page event
window.addEventListener('click', function () {
    titlePage.style.opacity = '0';
    titlePage.style.transition = 'opacity 1s ease';

    setTimeout(() => {
        titlePage.style.display = 'none';
        pageContainer.classList.remove('hidden');
        loadPage('home'); // Load the home page
    }, 1000);
});