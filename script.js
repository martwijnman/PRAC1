// Example JavaScript to change the header style dynamically (optional)
const header = document.getElementById('header');
const infolesson =  document.getElementsByClassName('lessoninfo');
// Listen for the scroll event
window.addEventListener('scroll', function () {
    // Example: Add a class when scrolling down (optional)
    if (window.scrollY > 100) {  // Example threshold
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    let scrolled = window.pageYOffset;
    document.getElementById('wrapper').style.backgroundPositionY = -(scrolled * 0.5);
    document.getElementById('lessons').style.backgroundPositionY = -(scrolled * 0.7);
    document.getElementById('teachers').style.backgroundPositionY =  -(scrolled * 0.3);
});
document.addEventListener('DOMContentLoaded', () => {
    const navbarItems = document.querySelectorAll('mouseover');

    navbarItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.classList.add('hover');
        });

        item.addEventListener('mouseout', () => {
            item.classList.remove('hover');
        });
    });
});
document.addEventListener('DOMContentLoaded', function(){
    infolesson.forEach(item => {
        item.addEventListener('mouseover', () => {
        item.classList.add('hover');});
        item.addEventListener('mouseout', () =>{
            item.classList.remove('hover');
        })
    })

window.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('a[href^="#"').forEach(anchor => {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            slowScrollTo(targetElement);
        }
    })
})
function slowScrollTo(element){
    const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const distance =  targetPosition - startPosition;
    const duration = 1500;
    let startTime = null;

    function animation(currentTime){
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }
    requestAnimationFrame(animation);
}
})
