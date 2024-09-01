// Ensure the DOM is fully loaded before executing the script
document.addEventListener('DOMContentLoaded', function () {

    // Mobile Menu Toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navList = document.getElementById('nav-list');

    if (mobileMenu && navList) {
        mobileMenu.addEventListener('click', () => {
            navList.classList.toggle('active');
        });
    } else {
        console.error("Mobile menu or nav list element not found.");
    }

    // Smooth Scroll for Learn More Button
    const learnMoreBtn = document.getElementById('learn-more-btn');
    const aboutSection = document.getElementById('about');

    if (learnMoreBtn && aboutSection) {
        learnMoreBtn.addEventListener('click', () => {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        });
    } else {
        console.error("Learn More button or About section not found.");
    }

    // Slideshow Functionality
    let slideIndex = 0;

    function showSlides() {
        const slides = document.getElementsByClassName("mySlides");
        if (slides.length === 0) {
            console.error("No slides found.");
            return;
        }

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1; }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 4000); // Change image every 4 seconds
    }

    function plusSlides(n) {
        slideIndex += n - 1;
        showSlides();
    }

    showSlides(); // Initial call to start the slideshow
});
