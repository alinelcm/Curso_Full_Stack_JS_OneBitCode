const form = document.getElementById("registerForm");

//form.addEventListener("submit", function (ev) {});

const addTechBtn = document.getElementById("addTechBtn");

addTechBtn.addEventListener("click", function (ev) {
  ev.preventDefault();
  const newTechDiv = document.getElementById("newTechDiv");
  const newTechInput = document.createElement("input");
  newTechInput.type = "text";
  newTechInput.id = "newTech";
  newTechInput.innerHTML = '<label for="newTech">Tecnologia:</label>';

  newTechDiv.appendChild(newTechInput);
});
