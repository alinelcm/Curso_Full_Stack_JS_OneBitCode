const boardRegions = document.querySelectorAll("#gameBoard span");
let virtualBoard = [];
let currentPlayer = "";

function turnPlayers() {
  const playerInput = document.getElementById(currentPlayer);
  document.getElementById("turn").innerText = playerInput.value;
}

function startGame() {
  //Inicializar as variaveis
  virtualBoard = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  currentPlayer = "player1";
  //Mudar o nome do jogador da vez
  document.querySelector("h2").innerHTML = 'Vez de <span id="turn"></span>';
}
