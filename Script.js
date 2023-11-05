const submarine = document.querySelector('.submarine img');
const swimmer = document.querySelector('.swimmer');
const fSection = document.querySelector('.f-section');

let isSubmarinePaused = false;

// Add an event listener to handle the scrolling
window.addEventListener('scroll', () => {
    const fSectionRect = fSection.getBoundingClientRect();
    const submarineRect = submarine.getBoundingClientRect();

    if (
        submarineRect.bottom > fSectionRect.top &&
        submarineRect.top < fSectionRect.bottom
    ) {
        // Submarine is inside the f-section, pause it
        isSubmarinePaused = true;
    } else {
        // Submarine is not in the f-section, resume it
        isSubmarinePaused = false;
    }

    if (isSubmarinePaused) {
        // Calculate the swimmer's horizontal scroll position
        const scrollPosition = window.scrollY - fSectionRect.top;
        swimmer.style.left = `${scrollPosition}px`;
    } else {
        swimmer.style.left = '0';
    }
});
