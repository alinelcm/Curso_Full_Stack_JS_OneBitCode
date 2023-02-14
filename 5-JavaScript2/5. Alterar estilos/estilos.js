function useLightTheme() {
  document.body.style.color = "black";
  document.body.style.backgroundColor = "white";
}

function useDarkTheme() {
  document.body.style.color = "white";
  document.body.style.backgroundColor = "rgb(31, 31, 31)";
}

function switchTheme() {
  document.body.classList.toggle("light-style");
  document.body.classList.toggle("dark-style");
}

document.getElementById("light-theme").addEventListener("click", useLightTheme);
document.getElementById("dark-theme").addEventListener("click", useDarkTheme);
document.getElementById("switch-theme").addEventListener("click", switchTheme);
