function addContact() {
  const contactSection = document.getElementById("contacts-list");

  const h3 = document.createElement("h3");
  h3.innerText = "Novo contato: ";

  const ul = document.createElement("ul"); //criando lista para inserir os novos contatos

  contactSection.append(h3, ul); //cria o h3 e ul dentro da contactSection

  const nameLi = document.createElement("li");
  nameLi.innerText = "Nome completo: ";
  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.name = "fullName";
  ul.appendChild(nameLi);
  nameLi.appendChild(nameInput);
  ul.appendChild(document.createElement("br"));

  const phoneLi = document.createElement("li");
  phoneLi.innerText = "Telefone: ";
  const phoneInput = document.createElement("input");
  phoneInput.type = "text";
  phoneInput.name = "phone";
  ul.appendChild(phoneLi);
  phoneLi.appendChild(phoneInput);
  ul.appendChild(document.createElement("br"));

  const addressLi = document.createElement("li");
  addressLi.innerHTML = '<label for="address"> Endereço: </label>';
  addressLi.id = "address";
  const addressInput = document.createElement("input");
  addressInput.type = "text";
  addressInput.name = "address";
  ul.appendChild(addressLi);
  addressLi.appendChild(addressInput);
  ul.appendChild(document.createElement("br"));

  const submitBtn = document.createElement("button");
  submitBtn.innerText = "Adicionar Contato";

  ul.appendChild(submitBtn);
}

function removeContact() {
  const contactSection = document.getElementById("contacts-list");
  const titles = document.getElementsByTagName("h3");
  const contacts = document.getElementsByTagName("ul");

  contactSection.removeChild(titles[titles.length - 1]);
  contactSection.removeChild(contacts[contacts.length - 1]);
}
