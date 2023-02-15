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
  resultsInput.value = "Error!";
  resultsInput.classList.add("error");
  const result = eval(textInput.value);
  resultsInput.value = result;
  resultsInput.classList.remove("error");
}

const main = document.querySelector("main");
const root = document.querySelector(":root");

document.getElementById("themeSwitcher").addEventListener("click", function () {
  if (main.dataset.theme === "dark") {
    root.style.setProperty("--background-color", "#cfdce7");
    root.style.setProperty("--border-color", "#000911");
    root.style.setProperty("--primary-color", "#07657c");
    root.style.setProperty("--font-color", "#000911");
    main.dataset.theme = "light";
  } else {
    root.style.setProperty("--background-color", "#000911");
    root.style.setProperty("--border-color", "#556471");
    root.style.setProperty("--primary-color", "#24a2c2");
    root.style.setProperty("--font-color", "#cfdce7");
    main.dataset.theme = "dark";
  }
});

document.getElementById("copy").addEventListener("click", function (ev) {
  const button = ev.currentTarget;
  if (button.innerText === "Copy") {
    button.innerText = "Copied!";
    button.classList.add("copied");
    navigator.clipboard.writeText(resultsInput.value);
    resultsInput.value = "";
  } else {
    button.innerText = "Copy";
    button.classList.remove("copied");
  }
});
