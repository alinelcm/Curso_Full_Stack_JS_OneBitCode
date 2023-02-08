const pokemons = [
  { nome: "Pikachu", tipo: "eletrico", nivel: 5, dono: "Ash" },
  { nome: "Squirtle", tipo: "agua", nivel: 8, dono: "Aline" },
  { nome: "Charmander", tipo: "fogo", nivel: 6, dono: "Ash" },
  { nome: "Arcanaine", tipo: "fogo", nivel: 10, dono: "Aline" },
  { nome: "Jolteon", tipo: "eletrico", nivel: 9, dono: "Aline" },
  { nome: "Staryu", tipo: "agua", nivel: 8, dono: "Ash" },
];

/* função MAP -> Mapeamento da array e seleciona o que é colocado no return, criando nova array

const pokemonsNomes = pokemons.map(function (pokemon) {
  return pokemon.nome;
});

console.log(pokemonsNomes);*/

/* função FILTER -> cria nova array filtrando elementos da array original

const pokemonsDeFogo = pokemons.filter(function (pokemon) {
  return pokemon.tipo === "fogo";
});

console.log(pokemonsDeFogo);

const pokemonsDeAline = pokemons.filter(function (pokemon) {
  return pokemon.dono === "Aline";
});
console.log(pokemonsDeAline);*/

/* função REDUCE -> acumula valores a medida que vai percorrendo a array 

const nivelTotal = pokemons.reduce(function (valorAcumulado, pokemon) {
  return valorAcumulado + pokemon.nivel;
}, 0); // <-- coloca o valor inicial aqui

console.log(nivelTotal);

const tipos = pokemons.reduce(function (valorAcumulado, pokemon) {
  if (valorAcumulado[pokemon.tipo]) {
    valorAcumulado[pokemon.tipo].push(pokemon);
  } else {
    valorAcumulado[pokemon.tipo] = [pokemon];
  }
  return valorAcumulado;
}, {});

console.log(tipos);*/

/* função SORT -> Ordenar elementos de array com algum criterio. Diferente das outras, o array original é alterado 

pokemons.sort(function (pokemon1, pokemon2) {
  return pokemon1.nivel - pokemon2.nivel;
}); //ordem crescente.
console.log(pokemons);*/

pokemons.sort(function (pokemon1, pokemon2) {
  return pokemon2.nivel - pokemon1.nivel;
}); //ordem decrescente.
console.log(pokemons);
