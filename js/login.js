function logar() {
    var user = document.getElementById('usuario').value;
    var pass = document.getElementById('senha').value;

    if (user === "admin" && pass === "123") {
        localStorage.setItem("logado", "true");
        localStorage.setItem("usuarioNome", "Gabriel Silva"); // Nome opcional para o perfil
        // Como o index está na raiz, ele entra na pasta pages
        window.location.href = "pages/cardapio.html"; 
    } else {
        alert("Usuário ou senha incorretos! Tente novamente.");
    }
}