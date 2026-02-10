function logar() {
    // Pegamos os valores digitados
    var user = document.getElementById('usuario').value;
    var pass = document.getElementById('senha').value;

    // Simulação de login (Usuário: admin | Senha: 123)
    if (user === "admin" && pass === "123") {
        
        // Salvamos no navegador que o usuário está logado
        localStorage.setItem("logado", "true");
        
        // Redirecionamos para a página de cardapio
<<<<<<< HEAD
        window.location.href = "../pages/cardapio.html"; 
=======
        window.location.href = "pages/cardapio.html"; 
>>>>>>> 46d8814 (animapizzaria)
        
    } else {
        alert("Usuário ou senha incorretos! Tente novamente.");
    }
}