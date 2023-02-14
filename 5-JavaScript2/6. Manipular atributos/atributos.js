const input = document.getElementById("input");

const value = document
  .getElementById("value")
  .addEventListener("click", function () {
    input.value = input.value === "" ? "Olá, mundo!" : "";
  });

const type = document
  .getElementById("type")
  .addEventListener("click", function () {
    input.type = input.type === "radio" ? "text" : "radio";
  });

const placeholder = document
  .getElementById("placeholder")
  .addEventListener("click", function () {
    input.placeholder = input.placeholder === "" ? "Digite algo.." : "";
  });

const disable = document
  .getElementById("disable")
  .addEventListener("click", function () {
    input.setAttribute("disabled", !input.disabled);
  });

document.getElementById("data").addEventListener("click", function () {
  const data = input.dataset.something;
  console.log("O valor do atributo data-something é: " + data);
  input.dataset.something = "Pikachu";
  console.log(
    "O valor do atributo data-something agora é: " + input.dataset.something
  );
});
