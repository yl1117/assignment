let currentIndex = 0;
let news = document.querySelectorAll(".item");

function showNextNews() {
    news[currentIndex].classList.remove("active");
    currentIndex++;
    if (currentIndex >= news.length) {
        currentIndex = 0;
    }
    news[currentIndex].classList.add("active");
}
function showPreviousNews() {
    news[currentIndex].classList.remove("active");
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = news.length - 1;
    }
    news[currentIndex].classList.add("active");
}