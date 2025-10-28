document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    clearErrors();

    const email = form.email.value.trim();
    const password = form.password.value;

    let valid = true;

    if (!email) {
      showError("email", "O e-mail é obrigatório");
      valid = false;
    } else if (!validateEmail(email)) {
      showError("email", "E-mail inválido");
      valid = false;
    }

    if (!password) {
      showError("password", "A senha é obrigatória");
      valid = false;
    } else if (password.length < 6) {
      showError("password", "A senha deve ter ao menos 6 caracteres");
      valid = false;
    }

    if (valid) {
      // Aqui você faria a requisição real para o backend (exemplo com fetch)
      const loginData = { email, password };
      console.log("Tentando login com:", loginData);

      /*
      fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData)
      })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          // redireciona para painel ou homepage logada
          window.location.href = "/painel.html";
        } else {
          alert("E-mail ou senha inválidos.");
        }
      })
      .catch(err => console.error("Erro:", err));
      */

      alert("Login simulado com sucesso!");
      form.reset();
    }
  });

  function clearErrors() {
    document.querySelectorAll(".error-message").forEach(span => {
      span.textContent = "";
      span.style.visibility = "hidden";
    });
  }

  function showError(fieldName, message) {
    const span = document.querySelector(`.error-message[data-for="${fieldName}"]`);
    if (span) {
      span.textContent = message;
      span.style.visibility = "visible";
    }
  }

  function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
});
