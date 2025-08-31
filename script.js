document.getElementById("formCadastro").addEventListener("submit", function(e) {
    e.preventDefault(); // impede envio imediato

    const nome = document.getElementById("firstname").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("password").value.trim();

    if (nome === "" || email === "" || senha === "") {
      alert("Preencha todos os campos!");
      return;
    }

    // ✅ Se passou na validação, redireciona
    window.location.href = "cadastro_animal.html";
  });