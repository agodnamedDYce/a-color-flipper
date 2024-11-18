const header = document.querySelector("header"); // Select the header element
const toggleMode = document.querySelector(".toggle-mode");
const colorValue = document.querySelector(".color-value");
const actionBtn = document.querySelector(".action-btn");

const colors = {
  chocolate: "#d2691e",
  blue: "#0000ff",
  purple: "#800080",
  orchid: "#da70d6",
  olive: "#808000",
  orange: "#ffa500",
  white: "#ffffff",
  green: "#008000",
  grey: "#808080",
  brown: "#a52a2a",
};

let isHexVisible = false;

const randomColor = function () {
  const colorKeys = Object.keys(colors);
  const randomIndex = Math.floor(Math.random() * colorKeys.length);
  const randomColorName = colorKeys[randomIndex];
  const randomColorHex = colors[randomColorName];

  // Change background color of the body
  document.body.style.backgroundColor = randomColorHex;

  // Change the bottom border color of the header
  header.style.borderBottomColor = randomColorHex;

  // Update the displayed color value
  colorValue.textContent = isHexVisible ? randomColorHex : randomColorName;
};

actionBtn.addEventListener("click", randomColor);

toggleMode.addEventListener("click", function () {
  isHexVisible = !isHexVisible;
  toggleMode.textContent = isHexVisible ? "Simple" : "Hex";

  const currentColor = colorValue.textContent;
  colorValue.textContent = isHexVisible
    ? currentColor
    : Object.keys(colors).find((key) => colors[key] === currentColor) ||
      currentColor;
});
