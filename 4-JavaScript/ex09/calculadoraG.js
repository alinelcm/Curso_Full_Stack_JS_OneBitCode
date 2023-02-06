function calcAreaTri() {
  const base = Number(prompt("Digite a base do triângulo:"));
  const altura = Number(prompt("Digite a altura do triângulo:"));
  return (base * altura) / 2;
}
function calcAreaRet() {
  const base = Number(prompt("Digite a base do retângulo:"));
  const altura = Number(prompt("Digite a altura do retângulo:"));
  return base * altura;
}
function calcAreaQua() {
  const lado = Number(prompt("Digite o lado do quadrado:"));
  return lado * lado;
}
function calcAreaTra() {
  const base = Number(prompt("Digite a base maior do trapezio:"));
  const base2 = Number(prompt("Digite a base menor do trapezio:"));
  const altura = Number(prompt("Digite a altura trapezio:"));
  return (areaTrapezio = ((base + base2) * altura) / 2);
}
function calcAreaCir() {
  const raio = Number(prompt("Digite o raio do círculo:"));
  return raio * raio * 3.14;
}

let option = "";

do {
  option = prompt(
    "Digite o número referente ao cálculo que deseja realizar:\n\n" +
      "1. Área de triângulo\n" +
      "2. Área de retângulo\n" +
      "3. Área de quadrado\n" +
      "4. Área de trapézio\n" +
      "5. Área de círculo\n" +
      "6. Sair"
  );
  let resultado = "";

  switch (option) {
    case "1":
      resultado = calcAreaTri();
      break;
    case "2":
      resultado = calcAreaRet();
      break;
    case "3":
      resultado = calcAreaQua();
      break;
    case "4":
      resultado = calcAreaTra();
      break;
    case "5":
      resultado = calcAreaCir();
      break;
    case "6":
      alert("Encerrando...");
      break;
    default:
      alert("Digite uma opção válida!");
  }

  if (resultado) {
    alert("A área é igual a: " + resultado);
  }
} while (option != 6);
