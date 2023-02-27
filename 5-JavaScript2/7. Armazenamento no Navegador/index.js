document.getElementById("sessionBtn").addEventListener("click", function () {
  const sInput = document.getElementById("session");
  sessionStorage.setItem("sInfo", sInput.value);
  sInput.value = "";
});

document
  .getElementById("sessionReadBtn")
  .addEventListener("click", function () {
    const sInfo = sessionStorage.getItem("sInfo");
    alert("A informação na session storage é: " + sInfo);
  });

document.getElementById("localBtn").addEventListener("click", function () {
  const localInput = document.getElementById("local");
  localStorage.setItem("lInfo", localInput.value);
  localInput.value = "";
});

document.getElementById("localReadBtn").addEventListener("click", function () {
  const lInfo = localStorage.getItem("lInfo");
  alert("A informação na local storage é: " + lInfo);
});

document.getElementById("cookieBtn").addEventListener("click", function () {
  const cookieInput = document.getElementById("cookie");
  //cookieName=value; expires=UTCStringDante; path=/
  document.cookie =
    "Informação do cookie =" +
    cookieInput.value +
    ";" +
    "expires=" +
    new Date(2023, 1, 28) +
    ";" +
    "path=/;";
  cookieInput.value = "";
});
