const touristName = prompt("Olá, turista. Qual o seu nome?");
let answer = prompt("Você já viajou para outro país? (S/N)");
let countries = "";
let numberOfCountries = 0;

while (answer == "S") {
  let country = prompt("Qual o nome do país?");
  countries += "</br>" + country;
  numberOfCountries++;
  answer = prompt("Você já viajou para mais algum país? (S/N)");
}

document.write("Nome do(a) turista: " + touristName + "</br>");
document.write(
  "Quantidade de países visitados: " + numberOfCountries + "</br>"
);
document.write("Lista de países: " + countries);
