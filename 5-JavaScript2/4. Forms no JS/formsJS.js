const form = document.getElementById("orderForm");

form.addEventListener("submit", function (ev) {
  ev.preventDefault();
  const name = document.querySelector('input[name="name"]').value;
  const address = document.querySelector('input[name="address"]').value;
  const breadType = document.querySelector('select[name="breadType"]').value;
  const protein = document.querySelector('input[name="protein"]').value;
  const obs = document.querySelector('textarea[name="obs"]').value;

  let salad = "";
  document
    .querySelectorAll('input[name="salad"]:checked')
    .forEach(function (item) {
      salad += "" + item.value + "; ";
    });

  console.log({ name, address, breadType, protein, salad, obs });
  alert(
    "Pedido Realizado!\n\nNome: " +
      name +
      "\nEndereço: " +
      address +
      "\nTipo de Pão: " +
      breadType +
      "\nProteína: " +
      protein +
      "\nSalada: " +
      salad +
      "\nObservações: " +
      obs
  );
});
