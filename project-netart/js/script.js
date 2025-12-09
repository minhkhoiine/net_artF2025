/*PAST*/

const pastDetail = document.getElementById("pastDetail");

document.querySelectorAll(".memory").forEach(m => {
  m.addEventListener("click", () => {
    const text = m.getAttribute("data-note") || "";
    pastDetail.textContent = text;

    m.classList.add("active");
    setTimeout(() => m.classList.remove("active"), 200);
  });
});

/*PRESENT*/

const book = document.getElementById("book");
const bookLabel = document.getElementById("bookLabel");
const presentNote = document.getElementById("presentNote");

book.addEventListener("click", () => {
  book.classList.toggle("open");
  const isOpen = book.classList.contains("open");

  if (isOpen) {
    bookLabel.textContent = "Studying...";
    presentNote.textContent =
      "The present is the time you turn past experience into future options.";
  } else {
    bookLabel.textContent = "Open Me";
    presentNote.textContent =
      "Click the book – when it opens, you're in “study mode”.";
  }
});

/* FUTURE*/

const future = document.getElementById("future");

function spawnStar() {
  const star = document.createElement("div");
  star.className = "star";
  const w = future.clientWidth;
  const h = future.clientHeight;

  star.style.left = Math.random() * w + "px";
  star.style.top = Math.random() * h * 0.8 + "px";
  star.style.animationDuration = 2 + Math.random() * 2 + "s";

  future.appendChild(star);
  setTimeout(() => star.remove(), 3500);
}

function spawnCar() {
  const car = document.createElement("div");
  car.className = "car";

  const h = future.clientHeight;
  const startTop = h * 0.3 + Math.random() * (h * 0.4);
  car.style.top = startTop + "px";
  car.style.left = "-60px";

  future.appendChild(car);

  let x = -60;
  const speed = 1 + Math.random() * 3;

  const timer = setInterval(() => {
    x += speed;
    car.style.left = x + "px";

    if (x > future.clientWidth + 60) {
      car.remove();
      clearInterval(timer);
    }
  }, 16);
}

setInterval(spawnStar, 900);
setInterval(spawnCar, 2000);
