const textInput = document.getElementById("textInput");
const resultsInput = document.getElementById("resultsInput");

const allowedKeys = [
  "(",
  ")",
  "/",
  "7",
  "8",
  "9",
  "*",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
  "0",
  ".",
  "%",
];

const keys = document
  .querySelectorAll(".cal-key")
  .forEach(function (calKeyBtn) {
    calKeyBtn.addEventListener("click", function () {
      const value = calKeyBtn.dataset.value;
      textInput.value += value;
    });
  });

const equal = document
  .getElementById("equal")
  .addEventListener("click", calculate);

const clear = document
  .getElementById("clear")
  .addEventListener("click", function () {
    textInput.value = "";
    textInput.focus();
  });

textInput.addEventListener("keydown", function (ev) {
  ev.preventDefault();
  if (allowedKeys.includes(ev.key)) {
    textInput.value += ev.key;
    return;
  }
  if (ev.key === "Backspace") {
    textInput.value = textInput.value.slice(0, -1);
  }
  if (ev.key === "Enter") {
    calculate();
  }
});

function calculate() {
  const result = eval(textInput.value);
  resultsInput.value = result;
}
