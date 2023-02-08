const form = document.getElementById("formulario");
  const btn = document.querySelector(".green-button");

  btn.addEventListener("click", function(event) {
    event.preventDefault();
    validar();
  });

  function validar() {
    event.preventDefault();
    const nome = document.getElementById("nome");
    const s_nome = document.getElementById("s_nome");
    const email = document.getElementById("email");
    const senha = document.getElementById("senha");

    if (nome.value === "") {
      nome.classList.add("error");
      nome.value = ' Type your name';
    } else {
      nome.classList.remove("error");
    }

    if (s_nome.value === "") {
      s_nome.classList.add("error");
      s_nome.value = ' Type your last name';
    } else {
      s_nome.classList.remove("error");
    }

    if (email.value === "") {
      email.classList.add("error");
      email.value = ' Type your email';
    } else {
      email.classList.remove("error");
    }

    if (senha.value === "") {
      senha.classList.add("error");
      
    } else {
      senha.classList.remove("error");
    }
    return false
  }