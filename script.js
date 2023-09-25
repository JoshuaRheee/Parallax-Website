document.addEventListener("scroll", function () {
    const parallax = document.querySelector(".parallax");
    const scrollPosition = window.scrollY;

    // Adjust the background position based on the scroll position
    parallax.style.backgroundPositionY = -scrollPosition * 0.7 + "px";
});
