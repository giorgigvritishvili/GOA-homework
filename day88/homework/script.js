<<<<<<< HEAD
const images = [
    'g.png',
    'k.png',
    'w.png' // დაამატეთ თქვენი გამოსახულებები ამ რიგში
];

let currentIndex = 0;

function showImage(index) {
    const imgElement = document.getElementById('carouselImage');
    imgElement.src = images[index];
}

function moveSlide(step) {
    currentIndex += step;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    showImage(currentIndex);
}

// დაწყებისას გადმოიტანეთ პირველი გამოსახულება
showImage(currentIndex);
=======
const images = [
    'g.png',
    'k.png',
    'w.png' // დაამატეთ თქვენი გამოსახულებები ამ რიგში
];

let currentIndex = 0;

function showImage(index) {
    const imgElement = document.getElementById('carouselImage');
    imgElement.src = images[index];
}

function moveSlide(step) {
    currentIndex += step;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    showImage(currentIndex);
}

// დაწყებისას გადმოიტანეთ პირველი გამოსახულება
showImage(currentIndex);
>>>>>>> e527c5236f3cd9407964202a860dcba7fed54f25
