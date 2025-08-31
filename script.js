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

document.getElementById("formAnimal").addEventListener("submit", function(e) {
    e.preventDefault(); // impede envio imediato

    const nomePet = document.getElementById("name").value.trim();
    const raca = document.getElementById("tipo").value.trim();
    const idade = document.getElementById("age").value.trim();
    const peso = document.getElementById("weight").value.trim();

    if (nomePet === "" || raca === "" || idade === "" || peso === "") {
      alert("Preencha todos os campos!");
      return;
    }

    // ✅ Se passou na validação, redireciona
    window.location.href = "curiosidade.html";
  });