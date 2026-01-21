function logout() {
    // Remove a permissão do navegador
    localStorage.removeItem("logado");
    
    // Redireciona de volta para a tela de login
    window.location.href = "index.html";
}