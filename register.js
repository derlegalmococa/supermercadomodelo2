document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registerForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    clearErrors();

    let isValid = validateForm();

    if (isValid) {
      // Aqui você enviaria os dados para o servidor via fetch/AJAX
      const formData = {
        fullName: form.fullName.value.trim(),
        email: form.email.value.trim(),
        phone: form.phone.value.trim(),
        password: form.password.value,
      };
      console.log("Dados de cadastro:", formData);

      // Exemplo de fetch POST (ajuste a URL conforme backend)
      /*
      fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      })
      .then(res => res.json())
      .then(data => {
        console.log("Resposta do servidor:", data);
        // lidar com sucesso / erro
      }).catch(err => {
        console.error("Erro:", err);
      });
      */

      alert("Cadastro realizado com sucesso (simulação).");
      form.reset();
    }
  });

  function clearErrors() {
    const errorSpans = document.querySelectorAll(".error-message");
    errorSpans.forEach(span => {
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

  function validateForm() {
    let valid = true;

    const fullName = form.fullName.value.trim();
    if (!fullName) {
      showError("fullName", "O nome é obrigatório");
      valid = false;
    }

    const email = form.email.value.trim();
    if (!email) {
      showError("email", "O e-mail é obrigatório");
      valid = false;
    } else if (!validateEmail(email)) {
      showError("email", "E-mail inválido");
      valid = false;
    }

    const phone = form.phone.value.trim();
    if (!phone) {
      showError("phone", "O telefone é obrigatório");
      valid = false;
    } else if (!/^\d{10,11}$/.test(phone)) {
      showError("phone", "Telefone deve ter 10 ou 11 dígitos");
      valid = false;
    }

    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    if (!password) {
      showError("password", "A senha é obrigatória");
      valid = false;
    } else if (password.length < 6) {
      showError("password", "Senha deve ter ao menos 6 caracteres");
      valid = false;
    }
    if (!confirmPassword) {
      showError("confirmPassword", "Confirme sua senha");
      valid = false;
    } else if (password !== confirmPassword) {
      showError("confirmPassword", "As senhas não coincidem");
      valid = false;
    }

    return valid;
  }

  function validateEmail(email) {
    // regex simples de email
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
});
