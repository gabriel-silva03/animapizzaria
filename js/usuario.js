document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem("logado") !== "true") {
        window.location.href = "../pages/login.html";
        return;
    }

    const nome = localStorage.getItem("usuarioNome") || "Jacinto Pinto Aquino Rego";
    const userNomeElement = document.getElementById('user-nome');
    const userAvatarElement = document.getElementById('user-avatar');
    
    // CORREÇÃO AQUI: nome no elemento de texto, src no elemento de imagem
    if (userNomeElement) {
        userNomeElement.innerText = nome;
    }

    if (userAvatarElement) {
        userAvatarElement.src = "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=880";
    }
});

function logout() {
    localStorage.removeItem("logado");
    localStorage.removeItem("usuarioNome");
    window.location.href = "../pages/login.html";
}