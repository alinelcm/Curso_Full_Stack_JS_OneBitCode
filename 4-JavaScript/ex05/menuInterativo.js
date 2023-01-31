let option = "";

do {
  option = prompt(
    "Escolha uma das opções:\n1) Opção 1\n2) Opção 2\n3) Opção 3\n4) Opção 4\n5) Encerrar"
  );
  alert("Foi escolhida a opção " + option);
} while (option !== "5");

alert("O sistema está sendo encerrado");
