let patients = [];

let option = "";

do {
  let list = "";
  for (let i = 0; i < patients.length; i++) {
    list += i + 1 + "° " + patients[i] + "\n";
  }

  option = prompt(
    "Fila de Espera:\n" +
      list +
      "\nDigite o número da opção desejada:\n1 - Novo Paciente\n2 - Consultar Paciente\n3 - Sair "
  );

  switch (option) {
    case "1":
      const newPatient = prompt("Escreva nome do paciente:");
      patients.push(newPatient);
      break;
    case "2":
      const firstPatient = patients.shift();
      if (firstPatient) {
        alert("Paciente " + firstPatient + " - em atendimento");
      } else {
        alert("Não há pacientes na fila");
      }

      break;
    case "3":
      alert("Encerrando sistema");
      break;
    default:
      alert("Opção inválida");
  }
} while (option != 3);
