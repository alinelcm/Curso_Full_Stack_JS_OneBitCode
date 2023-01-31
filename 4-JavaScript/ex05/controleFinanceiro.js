let amount = Number(
  prompt("Seja bem-vindo(a)!\nDigite a quantia atual em R$:")
);
let deposit = 0;
let withdraw = 0;
let option = "";

do {
  option = prompt(
    "Saldo disponível: R$" +
      amount +
      "\nDigite o número da operação desejada:+\n1) Adicionar valor\n2) Retirar valor\n3) Sair"
  );

  switch (option) {
    case "1":
      deposit = Number(prompt("Digite o valor em R$ que deseja adicionar:"));
      amount = amount + deposit;
      break;
    case "2":
      withdraw = Number(prompt("Digite o valor em R$ que deseja retirar:"));
      amount = amount - withdraw;
      break;
    case "3":
      alert("Obrigado. Ate breve!");
      break;
    default:
      alert("Escolha uma opção válida");
  }
} while (option !== "3");
