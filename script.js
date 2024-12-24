// First Slider (Background Slideshow)
const backgroundImages = [
    'pexels-creative-vix-9754.jpg',
    'pexels-fmaderebner-869258.jpg',
    'pexels-ph-m-tung-223235-709496.jpg',
    'pexels-pixabay-210243.jpg'
];
let backgroundIndex = 0;

function changeBackground() {
    const slideshow = document.querySelector('.slideshow');
    slideshow.style.backgroundImage = `url('${backgroundImages[backgroundIndex]}')`;
    backgroundIndex = (backgroundIndex + 1) % backgroundImages.length;
}

// Change background every 5 seconds
setInterval(changeBackground, 5000);
changeBackground(); // Initial call

// Slider functions for gallery and featured sliders
let currentSlideIndex = 0;

function showSlide(index, sliderId) {
    const slides = document.querySelectorAll(`#${sliderId} .slider-image`);
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? "block" : "none";
    });
}

function moveSlide(step, sliderId) {
    const slides = document.querySelectorAll(`#${sliderId} .slider-image`);
    currentSlideIndex = (currentSlideIndex + step + slides.length) % slides.length;
    showSlide(currentSlideIndex, sliderId);
}

// Initial display of the first slide for the gallery slider
showSlide(currentSlideIndex, 'gallerySlider');

// Automatic slider for featured projects
let featuredCurrentSlideIndex = 0;
const featuredSlides = document.querySelectorAll("#featuredSlider .slider-image");

function showFeaturedSlide(index) {
    featuredSlides.forEach((slide, i) => {
        slide.style.display = i === index ? "block" : "none";
    });
}

function moveFeaturedSlide(step) {
    featuredCurrentSlideIndex = (featuredCurrentSlideIndex + step + featuredSlides.length) % featuredSlides.length;
    showFeaturedSlide(featuredCurrentSlideIndex);
}

// Auto-move for the featured slider
setInterval(() => {
    moveFeaturedSlide(1);
}, 3000); // Change slide every 3 seconds

// Initial display of the first slide for the featured slider
showFeaturedSlide(featuredCurrentSlideIndex);
// Testimonial Slider (Fade Effect)
let testimonialCurrentIndex = 0;
const testimonialSlides = document.querySelectorAll("#testimonialSlider .slider-image");

function showTestimonialSlide(index) {
    testimonialSlides.forEach((slide, i) => {
        slide.style.display = i === index ? "block" : "none";
    });
}

function moveTestimonialSlide(step) {
    testimonialCurrentIndex = (testimonialCurrentIndex + step + testimonialSlides.length) % testimonialSlides.length;
    showTestimonialSlide(testimonialCurrentIndex);
}

// Initially show the first testimonial
showTestimonialSlide(testimonialCurrentIndex);

// Auto rotate testimonials every 5 seconds
setInterval(() => {
    moveTestimonialSlide(1);
}, 5000);
