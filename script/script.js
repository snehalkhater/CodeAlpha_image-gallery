
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
let currentIndex = 0;
let images = [];

document.addEventListener("DOMContentLoaded", () => {
    images = Array.from(document.querySelectorAll(".gallery-item img"));
});

function openLightbox(src) {
    lightbox.style.display = "flex";
    lightboxImg.src = src;
    currentIndex = images.findIndex(img => img.src === src);
}

function closeLightbox() {
    lightbox.style.display = "none";
}

function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex < 0) currentIndex = images.length - 1;
    if (currentIndex >= images.length) currentIndex = 0;
    lightboxImg.src = images[currentIndex].src;
}

function filterGallery(category) {
    const items = document.querySelectorAll(".gallery-item");
    items.forEach(item => {
        if (category === "all" || item.classList.contains(category)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}
