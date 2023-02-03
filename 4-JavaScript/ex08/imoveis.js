const imoveis = [];

let opcao = "";

do {
  opcao = prompt(
    "IMÓVEIS CADASTRADOS: " +
      imoveis.length +
      "\n\nDigite o número da opção desejada:\n" +
      "\n1 - Salvar novo imóvel" +
      "\n2 - Exibir imóveis cadastrados" +
      "\n3 - Sair"
  );

  switch (opcao) {
    case "1":
      const novoImovel = {};

      novoImovel.proprietario = prompt("Nome do proprietário:");
      novoImovel.quartos = prompt("Número de quartos:");
      novoImovel.banheiros = prompt("Número de banheiros:");
      novoImovel.garagem = prompt("Possui garagem?(Sim/Não)");

      const confirmacao = confirm(
        "Salvar este imovel?\n" +
          "\nProprietário: " +
          novoImovel.proprietario +
          "\nQuartos: " +
          novoImovel.quartos +
          "\nBanheiros: " +
          novoImovel.banheiros +
          "\nPossui garagem? " +
          novoImovel.garagem
      );

      if (confirmacao) {
        imoveis.push(novoImovel);
      }
      break;

    case "2":
      for (let i = 0; i < imoveis.length; i++) {
        alert(
          "Imóvel " +
            (i + 1) +
            "\nProprietário: " +
            imoveis[i].proprietario +
            "\nQuartos: " +
            imoveis[i].quartos +
            "\nBanheiros: " +
            imoveis[i].banheiros +
            "\nPossui garagem? " +
            imoveis[i].garagem
        );
      }

      break;

    case "3":
      break;
  }
} while (opcao == 1);
