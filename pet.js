document.getElementById("formAnimal").addEventListener("submit", function(e) {
    e.preventDefault(); // impede envio imediato

    const nomePet = document.getElementById("name").value.trim();
    const raca = document.getElementById("tipo").value.trim();
    const idade = document.getElementById("age").value;
    const peso = document.getElementById("weight").value;

    if (nomePet === "" || raca === "" || idade === "" || peso === "") {
      alert("Preencha todos os campos!");
      return;
    }

    // ✅ Se passou na validação, redireciona
    window.location.href = "curiosidade.html";
  });