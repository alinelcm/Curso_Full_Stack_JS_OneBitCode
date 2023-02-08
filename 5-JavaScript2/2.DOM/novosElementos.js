function addInput() {
  const ul = document.getElementById("inputs");

  const newLi = document.createElement("li");
  newLi.className = "list-item";
  newLi.innerText = "Novo input";

  const newInput = document.createElement("input");
  newInput.type = "text";
  newInput.name = "input";

  ul.appendChild(newLi); //adicionando a nova lista à ul
  newLi.appendChild(newInput); //adicionando novo input a cada item da lista
}
