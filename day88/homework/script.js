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
