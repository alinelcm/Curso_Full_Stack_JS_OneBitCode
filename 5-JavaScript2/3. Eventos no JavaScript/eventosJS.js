function register(ev) {
  const sectionElement = ev.currentTarget.parentNode;
  const userName = sectionElement.children.userName.value;
  const password = sectionElement.children.password.value;
  const confirmPassword = sectionElement.children.confirmPassword.value;

  if (password === confirmPassword) {
    alert("Usuario " + userName + " registrado");
  } else {
    alert("As senhas não conferem");
  }
}
const registerBtn = document.getElementById("registerBtn");

registerBtn.addEventListener("click", register);
