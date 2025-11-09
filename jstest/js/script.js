const colors = ["black", "pink", "red","orange", "yellow", "green"];

function changeColor() {
  const heading = document.getElementById("heading");
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  heading.style.color = randomColor;
}

document.getElementById("colorBtn").addEventListener("click", changeColor);
