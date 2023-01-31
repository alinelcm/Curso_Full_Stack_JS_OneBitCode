let word = prompt("Escreva uma palavra e identificarei se é palíndromo:");
let wordReverse = "";

for (let i = word.length; i > 0; wordReverse = wordReverse + word[i]) {
  i--;
}

if (word == wordReverse) {
  alert("A palavra é palíndromo");
} else alert(word + " não é palíndromo\nEscrita ao contrário: " + wordReverse);
