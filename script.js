const noBtn = document.getElementById("noBtn");
const card = document.querySelector(".card");

noBtn.addEventListener("mouseenter", () => {

    const cardRect = card.getBoundingClientRect();

    const maxX = cardRect.width - noBtn.offsetWidth - 30;
    const maxY = cardRect.height - noBtn.offsetHeight - 30;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});

function nextSlide() {
    document.getElementById("slide1").classList.remove("active");
    document.getElementById("slide2").classList.add("active");
}

function selectOption(pilihan) {
    document.getElementById("slide2").classList.remove("active");
    document.getElementById("slide3").classList.add("active");

    document.getElementById("result").textContent =
        `Siap! Sabtu nanti kita ${pilihan}`;
}