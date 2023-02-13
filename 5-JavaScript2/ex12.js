function createInput(id, value, name, type = "text") {
  const input = document.createElement("input");
  input.id = id;
  input.value = value;
  input.name = name;
  input.type = type;
  return input;
}

function createLabel(text, htmlFor) {
  const label = document.createElement("label");
  label.htmlFor = htmlFor;
  label.innerText = text;
  return label;
}

const addTechBtn = document.getElementById("addTechBtn");
const form = document.getElementById("registerForm");
const developers = [];
let inputRows = 0;

addTechBtn.addEventListener("click", function (ev) {
  const stackList = document.getElementById("stackList");

  const newRow = document.createElement("li");
  const rowIndex = inputRows;
  inputRows++;
  newRow.id = "inputRow-" + rowIndex;
  newRow.className = "inputRow";

  const techLabel = createLabel("Nome: ", "techName-" + rowIndex);
  const techInput = createInput("techName-" + rowIndex, null, "techName");

  const experienceLabel = createLabel("  Tempo de experiência: ");
  const expRadio1 = createInput(
    "exp" + rowIndex + ".1",
    "0-2 anos",
    "experience" + rowIndex,
    "radio"
  );
  const expRadio1Label = createLabel("0-2 Anos ", "experience" + rowIndex);
  const expRadio2 = createInput(
    "exp" + rowIndex + ".2",
    "3-4 anos",
    "experience" + rowIndex,
    "radio"
  );
  const expRadio2Label = createLabel("3-4 Anos ", "experience" + rowIndex);
  const expRadio3 = createInput(
    "exp" + rowIndex + ".3",
    "5+ anos",
    "experience" + rowIndex,
    "radio"
  );
  const expRadio3Label = createLabel("5+ Anos ", "experience" + rowIndex);

  const removeRow = document.createElement("button");
  removeRow.type = "button";
  removeRow.innerText = "Remover";
  removeRow.addEventListener("click", function () {
    stackList.removeChild(newRow);
  });

  stackList.appendChild(newRow);
  newRow.append(
    techLabel,
    techInput,
    experienceLabel,
    expRadio1,
    expRadio1Label,
    expRadio2,
    expRadio2Label,
    expRadio3,
    expRadio3Label,
    removeRow
  );
});

form.addEventListener("submit", function (ev) {
  ev.preventDefault();
  const fullName = document.getElementById("name");
  const rows = document.querySelectorAll(".inputRow");

  let techs = [];
  rows.forEach(function (row) {
    const tech = document.querySelector(
      "#" + row.id + ' input[name="techName"]'
    ).value;
    const experience = document.querySelector(
      "#" + row.id + ' input[type="radio"]:checked'
    ).value;
    techs.push({ name: tech, exp: experience });
  });

  const newDev = { fullName: fullName.value, techs: techs };
  developers.push(newDev);
  alert("Dev Cadastrado com sucesso");

  fullName.value = "";
  rows.forEach(function (row) {
    row.remove();
  });
  console.log(developers);
});
