function logar() {
    // Pegamos os valores digitados
    var user = document.getElementById('usuario').value;
    var pass = document.getElementById('senha').value;

    // Simulação de login (Usuário: admin | Senha: 123)
    if (user === "admin" && pass === "123") {
        
        // Salvamos no navegador que o usuário está logado
        localStorage.setItem("logado", "true");
        
        // Redirecionamos para a página de produtos
        window.location.href = "produtos.html"; 
        
    } else {
        alert("Usuário ou senha incorretos! Tente novamente.");
    }
}