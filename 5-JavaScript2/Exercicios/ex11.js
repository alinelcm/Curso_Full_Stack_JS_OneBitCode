function addPlayer() {
  const position = document.querySelector("#position").value;
  const name = document.querySelector("#name").value;
  const number = document.querySelector("#number").value;

  const confirmation = confirm(
    alert(
      "Deseja escalar este jogador?\nPosição: " +
        position +
        "\nNome: " +
        name +
        "\nNúmero da camisa: " +
        number
    )
  );
  if (confirmation) {
    const teamList = document.getElementById("teamList");
    const player = document.createElement("li");
    player.id = "player-" + number;
    player.innerText = position + ": " + name + " (" + number + ")";
    teamList.appendChild(player);

    document.getElementById("position").value = "";
    document.getElementById("name").value = "";
    document.getElementById("number").value = "";
  }
}

function removePlayer() {
  const numberToRemove = document.getElementById("numberToRemove").value;
  const playerToRemove = document.getElementById("player-" + numberToRemove);

  const confirmation = confirm("Remover o " + playerToRemove.innerText + " ?");
  if (confirmation) {
    playerToRemove.remove();
    document.getElementById("numberToRemove").value = "";
  }
}
