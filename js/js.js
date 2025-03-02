 
 
 
 
 // Show dropdown on hover (for better support)

//  $(document).ready(function () {
//     $(".has-submenu").hover(function () {
//         $(this).children(".submenu").stop(true, true).fadeIn(200);
//     }, function () {
//         $(this).children(".submenu").stop(true, true).fadeOut(200);
//     });
// });

// slider

document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript is running!");

    const slider = document.querySelector(".custom-slider");
    const prevBtn = document.getElementById("prev-button");
    const nextBtn = document.getElementById("next-button");

    console.log("Prev Button:", prevBtn);
    console.log("Next Button:", nextBtn);
    console.log("Slider:", slider);

    if (!prevBtn || !nextBtn || !slider) {
        console.error("Error: One or more elements not found!");
        return; // Stop execution if elements are missing
    }

    let currentIndex = 0;
    const slideWidth = document.querySelector(".custom-slide").offsetWidth;
    const totalSlides = Math.floor(slider.scrollWidth / slideWidth);

    function updateButtons() {
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex === totalSlides - 1;
        console.log("Current Index:", currentIndex, "Total Slides:", totalSlides);
    }

    nextBtn.addEventListener("click", () => {
        console.log("Next Button Clicked!");
        if (currentIndex < totalSlides - 1) {
            currentIndex++;
            slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
            updateButtons();
        }
    });

    prevBtn.addEventListener("click", () => {
        console.log("Prev Button Clicked!");
        if (currentIndex > 0) {
            currentIndex--;
            slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
            updateButtons();
        }
    });

    updateButtons();
});

// hero-2

window.onload = function () {
    const newSlider = document.querySelector(".new-slider");
    const newPrevBtn = document.getElementById("new-prev-button");
    const newNextBtn = document.getElementById("new-next-button");

    let newIndex = 0;
    const newSlideWidth = document.querySelector(".new-slide").offsetWidth;
    const newTotalSlides = Math.floor(newSlider.scrollWidth / newSlideWidth);

    function updateNewButtons() {
        newPrevBtn.disabled = newIndex === 0;
        newNextBtn.disabled = newIndex === newTotalSlides - 1;
    }

    newNextBtn.addEventListener("click", () => {
        if (newIndex < newTotalSlides - 1) {
            newIndex++;
            newSlider.style.transform = `translateX(-${newIndex * newSlideWidth}px)`;
            updateNewButtons();
        }
    });

    newPrevBtn.addEventListener("click", () => {
        if (newIndex > 0) {
            newIndex--;
            newSlider.style.transform = `translateX(-${newIndex * newSlideWidth}px)`;
            updateNewButtons();
        }
    });

    updateNewButtons();
};

