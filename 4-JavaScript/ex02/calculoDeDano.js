let character1 = prompt("Qual o nome do personagem atacante:");
let attack = Number(prompt(`Qual o poder de ataque de ${character1}?`));

let character2 = prompt("Qual o nome do defensor?");
let lifePoints = Number(prompt(`Quantos pontos de vida tem ${character2}?`));
let defense = Number(prompt(`Qual o poder de defesa de ${character2}?`));
let shield = prompt(`${character2} possui escudo?(s/n)`);
let damage = 0;

if (attack > defense && shield === "n") {
  damage = attack - defense;
} else if (attack > defense && shield === "s") {
  damage = (attack - defense) / 2;
}
lifePoints -= damage;

document.write(
  `${character1} causou ${damage} pontos de dano em ${character2} <br/>`
);
document.write(`${character2} está com ${lifePoints} pontos de vida`);
