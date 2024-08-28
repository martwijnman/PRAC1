// Example JavaScript to change the header style dynamically (optional)
const header = document.getElementById('header');

// Listen for the scroll event
window.addEventListener('scroll', function () {
    // Example: Add a class when scrolling down (optional)
    if (window.scrollY > 100) {  // Example threshold
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


// Select the element with the rainbow background
const rainbowBg = document.getElementById('rainbowbg');

// Function to generate a random color in hexadecimal format
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to update the background color to a rainbow gradient
function updateBackgroundColor() {
    const hue = (Date.now() % 360); // Get a hue value based on current time
    rainbowBg.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
}

// Call the updateBackgroundColor function every 100 milliseconds
setInterval(updateBackgroundColor, 100);