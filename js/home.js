const carroucel = document.querySelector("#carrousel");
const car_container = document.querySelector("#inner--car");

const button_left = document.querySelector("#left");
const button_right = document.querySelector("#right");

let index = 0;
const max_index = 3;
button_right.addEventListener("click", () => {
  if (index < max_index) {
    index++;
    car_container.style.transform = `translateX(-${index * 100}%)`;
  }
});
button_left.addEventListener("click", () => {
  if (index > 0) {
    index--;
    car_container.style.transform = `translateX(-${index * 100}%)`;
  }
});

const countdownDate = new Date("2024-09-12T14:00:00").getTime();

const daysElement = document.getElementById("day");
const hoursElement = document.getElementById("hour");
const minutesElement = document.getElementById("min");
const secondsElement = document.getElementById("sec");
function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = countdownDate - now;

  if (timeLeft <= 0) {
    clearInterval(timerInterval);
    daysElement.textContent = "00";
    hoursElement.textContent = "00";
    minutesElement.textContent = "00";
    secondsElement.textContent = "00";
    return;
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  daysElement.textContent = String(days).padStart(2, "0");
  hoursElement.textContent = String(hours).padStart(2, "0");
  minutesElement.textContent = String(minutes).padStart(2, "0");
  secondsElement.textContent = String(seconds).padStart(2, "0");
}
const timerInterval = setInterval(updateCountdown, 1000);

updateCountdown();

const artistas = [
  "Andrea Allen",
  "augusto Zanela",
  "cecilia Duhau",
  "cecilia ivanchevich",
  "Daniel Corvino",
  "Eugenio Cuttica",
  "Fernando Brizuela",
  "hoffmann",
  "horacion Sanchez Fantino",
  "lux Linder",
  "martina servio",
];

const innerCard = document.querySelector("#inner--car");
const renderGalery = () => {
  let actualPhotoContainer = document.createElement("div");
  actualPhotoContainer.classList.add("photo-container");
  let index = 0;
  for (artName in artistas) {
    index++;
    console.log(artName);
    if (index > 3) {
      innerCard.appendChild(actualPhotoContainer);
      actualPhotoContainer = document.createElement("div");
      actualPhotoContainer.classList.add("photo-container");
      index = 1;
    }
    let imageContainer = document.createElement("div");
    let img = document.createElement("img");
    img.src = `src/artistas/${artistas[artName]}.webp`;
    img.alt = artistas[artName];
    imageContainer.appendChild(img);
    actualPhotoContainer.appendChild(imageContainer);

    if (artName == artistas.length - 1) {
      innerCard.appendChild(actualPhotoContainer);
    }
  }
};
renderGalery();

const handleRezise = () => {
  const title = document.querySelector("#direction");
  const talleres_title = document.querySelector("#talleres");
  if (window.innerWidth < 993) {
    title.innerHTML = "<span>Nuestra</span> Ubicacion";
    talleres_title.innerHTML = "Nuestros Eventos <span>anteriores</span>";
  } else {
    title.innerHTML = "¡Te esperamos!";
    talleres_title.innerHTML = "Eventos anteriores";
  }
};
handleRezise();
window.addEventListener("resize", handleRezise);
