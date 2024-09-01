// initialize variables
let container = document.getElementById("container");
let range = document.querySelector("input");
let clear = document.getElementById("clear");
let width = container.clientWidth;
let mouseDown = false;
// functions
function updateSizeValue(value) {
  document.getElementById("sizeValue").innerHTML = `${value} x ${value}`;
}
function makeGrid(size) {
  container.innerHTML = "";
  for (let i = 0; i < size * size; i++) {
    let div = document.createElement("div");
    div.classList.add("square");
    let squareWidth = width / size;
    div.style.width = `${squareWidth}px`;
    div.style.height = `${squareWidth}px`;
    container.appendChild(div);
    let squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
      square.addEventListener("mousedown", changeColor);
      square.addEventListener("mouseover", changeColor);
    });
  }
}
function changeColor(e) {
  if (e.type === "mouseover") {
    if (mouseDown) {
      e.target.style.backgroundColor = "black";
    }
  }
}
function clearGrid() {
  let squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.style.backgroundColor = "white";
  });
}
// program
makeGrid(16);
clear.addEventListener("click", () => clearGrid());
document.addEventListener("mousedown", () => (mouseDown = true));
document.addEventListener("mouseup", () => (mouseDown = false));
range.addEventListener("mousemove", (e) => updateSizeValue(e.target.value));
range.onchange = (e) => makeGrid(e.target.value);
