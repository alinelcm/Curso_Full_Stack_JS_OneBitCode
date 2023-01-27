let vehicle1 = prompt("Qual o nome do primeiro veículo?");
let speed1 = Number(prompt("Qual a sua velocidade?"));
let vehicle2 = prompt("Qual o nome do primeiro veículo?");
let speed2 = Number(prompt("Qual a sua velocidade?"));

if (speed1 > speed2) {
  document.write(`${vehicle1} é o mais veloz!`);
} else if (speed1 < speed2) {
  document.write(`${vehicle2} é o mais veloz!`);
} else {
  document.write(`As velocidades de ${vehicle1} e ${vehicle2} são iguais.`);
}
