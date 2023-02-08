const vagas = [];

//função de exibir menu
function exibirMenu() {
  const opcao = prompt(
    "Bem-vindo(a) ao Sistema de Vagas de Emprego\n\n" +
      "Digite o número da opção desejada:\n" +
      "1. Listar vagas disponíveis\n" +
      "2. Criar nova vaga\n" +
      "3. Visualizar uma vaga\n" +
      "4. Inscrever um candidato em uma vaga\n" +
      "5. Excluir uma vaga\n" +
      "6. Sair"
  );
  return opcao;
}

//função de listar vagas:
function exibirVagas() {
  const vagasTxt = vagas.reduce(function (txtFinal, vaga, indice) {
    txtFinal += indice + ". ";
    txtFinal += vaga.titulo;
    txtFinal += " - Número de Candidatos: " + vaga.candidatos.length + "\n";
    return txtFinal;
  }, "");
  alert(vagasTxt);
}

// função de criação de vagas:
function novaVaga() {
  const titulo = prompt("Digite o título da vaga: ");
  const descricao = prompt("Descrição da vaga: ");
  const dataLimite = prompt("Digite uma data limite(dd/mm/aa): ");

  const confirmacao = confirm(
    "Salvar esta vaga?\n\nTítulo: " +
      titulo +
      "\nDescrição: " +
      descricao +
      "\nData Limite: " +
      dataLimite
  );
  if (confirmacao) {
    const novaVaga = { titulo, descricao, dataLimite, candidatos: [] };
    vagas.push(novaVaga);
    alert("Vaga adicionada");
  }
}

//função visualizar uma vaga

function visualizarVaga() {
  const indiceVaga = prompt("Informe o índice da vaga que deseja visualizar: ");
  if (indiceVaga >= vagas.length || indiceVaga < 0) {
    alert("Índice inválido.");
    return;
  }

  const vaga = vagas[indiceVaga];

  const candidatosTxt = vaga.candidatos.reduce(function (
    textoFinal,
    candidato
  ) {
    return textoFinal + "\n - " + candidato;
  },
  "");
  alert(
    "Vaga nº: " +
      indiceVaga +
      "\nTítulo: " +
      vaga.titulo +
      "\nDescrição: " +
      vaga.descricao +
      "\nData Limite: " +
      vaga.dataLimite +
      "\nNº de cadidatos: " +
      vaga.candidatos.length +
      "\nCandidatos: " +
      candidatosTxt
  );
}

//funçao inscrever candidato em uma vaga
function inscreverCandidato() {
  const indiceVaga = prompt("Informe o nº da vaga que deseja se inscrever: ");
  const nomeCandidato = prompt("Informe o nome do candidato:");
  const vaga = vagas[indiceVaga];

  const confirmacao = confirm(
    "Informações da vaga:\nVaga nº: " +
      indiceVaga +
      "\nTítulo: " +
      vaga.titulo +
      "\nDescrição: " +
      vaga.descricao +
      "\nData Limite: " +
      vaga.dataLimite +
      "\nNº de cadidatos: " +
      vaga.candidatos.length +
      "\n\nNome do candidato inscrito: " +
      nomeCandidato +
      "\n\n Confirmar a inscrição?"
  );
  if (confirmacao) {
    vaga.candidatos.push(nomeCandidato);
    alert("Candidato inscrito com sucesso");
  }
}

//função para excluir uma vaga
function excluirVaga() {
  const indiceVaga = prompt("Informe o nº da vaga que deseja excluir: ");
  const vaga = vagas[indiceVaga];

  alert(
    "Informações da vaga:\nVaga nº: " +
      indiceVaga +
      "\nTítulo: " +
      vaga.titulo +
      "\nDescrição: " +
      vaga.descricao +
      "\nData Limite: " +
      vaga.dataLimite +
      "\nNº de cadidatos: " +
      vaga.candidatos.length
  );

  const confirmacao = confirm("Deseja excluir a vaga?");
  if (confirmacao) {
    vagas.splice(indiceVaga, 1);
    alert("Vaga excluída");
  }
}

//função para executar o programa
function executar() {
  let opcao = "";

  do {
    opcao = exibirMenu();

    switch (opcao) {
      case "1":
        exibirVagas();
        break;
      case "2":
        novaVaga();
        break;
      case "3":
        visualizarVaga();
        break;
      case "4":
        inscreverCandidato();
        break;
      case "5":
        excluirVaga();
        break;
      case "6":
        alert("Encerrando...");
        break;
      default:
        alert("Digite uma opção válida");
        break;
    }
  } while (opcao !== "6");
}

executar();
