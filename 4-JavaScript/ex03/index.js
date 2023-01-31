const metros = Number(prompt("Digite um valor em metros:"));
const medida = prompt(
  "Para qual unidade de medida você quer converter? (mm, cm, dm, dam, hm, km)"
);
let resultado = 0;

switch (medida) {
  case "mm":
    resultado = metros * 1000;
    document.write(`${metros} metros = ${resultado} milímetros`);
    break;
  case "cm":
    resultado = metros * 100;
    document.write(`${metros} metros = ${resultado} centimetros`);
    break;
  case "dm":
    resultado = metros * 100;
    document.write(`${metros} metros = ${resultado} decimetros`);
    break;
  case "dam":
    resultado = metros / 10;
    document.write(`${metros} metros = ${resultado} decametros`);
    break;
  case "hm":
    resultado = metros / 100;
    document.write(`${metros} metros = ${resultado} hectometros`);
    break;
  case "km":
    resultado = metros / 1000;
    document.write(`${metros}  metros = ${resultado} kilometros`);
    break;
  default:
    document.write("Opção Inválida");
}
