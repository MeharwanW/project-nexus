window.addEventListener('scroll', function () {
    const navbar = document.querySelector('#navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-opaque');
    } else {
        navbar.classList.remove('navbar-opaque');
    }
});
document.addEventListener('DOMContentLoaded', function () {
    const backgroundContainer = document.querySelector('.background-container');
    const images = ['image1.jpg', 'image2.jpg', 'image3.jpg']; // List of image URLs
    let currentImageIndex = 0;

    function changeBackground() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        const imageUrl = images[currentImageIndex];
        backgroundContainer.style.backgroundImage = `url(${imageUrl})`;
    }

    // Change the background image every 5 seconds (5000 milliseconds)
    setInterval(changeBackground, 5000);
});
