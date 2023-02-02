let cards = [];
let option = "";

do {
  option = prompt(
    "Cartas disponíveis:\n" +
      cards.length +
      "\nEscolha uma ação:\n1- Adicionar carta ao baralho\n2- Puxar carta do baralho\n3- Sair"
  );
  switch (option) {
    case "1":
      let newCard = prompt("Qual carta deseja adicionar ao baralho?");
      const check = cards.includes(newCard);
      if (check == true) {
        alert(newCard + " já está no baralho");
      } else {
        cards.push(newCard);
      }
      break;
    case "2":
      let pickCard = cards.shift();
      if (pickCard) {
        alert("Carta puxada: " + pickCard);
      } else {
        alert("Não há cartas no baralho");
      }

      break;
    case "3":
      alert("Encerrado");
      break;
    default:
      alert("Opção inválida");
  }
} while (option != 3);
