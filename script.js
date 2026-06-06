const slides = document.querySelectorAll(".slide");
const progressBar = document.getElementById("progressBar");

let current = 0;

let selectedPlace = "";
let selectedDetail = "";
let selectedTime = "";

function updateProgress(){
    const percent = ((current + 1) / slides.length) * 100;
    progressBar.style.width = percent + "%";
}

function showSlide(index){
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
    current = index;
    updateProgress();
}

function nextSlide(){
    if(current < slides.length - 1){
        showSlide(current + 1);
    }
}

function moveButton(btn){

    btn.addEventListener("mouseenter",()=>{

        const card = document.querySelector(".card");

        const maxX = card.clientWidth - btn.offsetWidth - 40;
        const maxY = card.clientHeight - btn.offsetHeight - 40;

        btn.style.position = "absolute";
        btn.style.left = Math.random() * maxX + "px";
        btn.style.top = Math.random() * maxY + "px";
    });
}

moveButton(document.getElementById("runBtn1"));
moveButton(document.getElementById("runBtn2"));

function selectPlace(place){

    selectedPlace = place;

    const options = {
        Pantai:["Melasti","Pandawa","Kuta"],
        Nonton:["Action","Romantis","Komedi"],
        Mall:["Belanja","Game Center","Jalan Santai"],
        Cafe:["Coffee Shop","Dessert Cafe","Cafe Instagramable"],
        Kuliner:["Seafood","Japanese Food","Sate"]
    };

    const container = document.getElementById("subOptions");
    container.innerHTML = "";

    options[place].forEach(item => {

        const btn = document.createElement("button");
        btn.textContent = item;

        btn.onclick = () => {
            selectedDetail = item;
            nextSlide();
        };

        container.appendChild(btn);
    });

    showSlide(4);
}

function selectTime(time){
    selectedTime = time;

    document.getElementById("summary").innerHTML = `
        <strong>Rencana Sabtu ❤️</strong><br><br>

        📍 ${selectedPlace}<br>
        ✨ ${selectedDetail}<br>
        🕒 ${selectedTime}<br>
        ❤️ Berdua
    `;

    nextSlide();
}

function createHeart(){

    const heart = document.createElement("div");

    heart.classList.add("heart");
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.fontSize = (15 + Math.random() * 20) + "px";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },8000);
}

setInterval(createHeart,600);

updateProgress();