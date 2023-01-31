let number = Number(prompt("Para qual número você quer ver a tabuada?"));
let product = 0;
mTable = "";

for (
  //inicialização//
  let i = 0;
  //condição//
  i <= 20;
  //finalização//
  i++
) {
  product = number * i;
  mTable += number + " x " + i + " = " + product + "\n";
}
alert("Tabuada:\n" + mTable);
