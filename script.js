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
})
