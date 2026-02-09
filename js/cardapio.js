document.addEventListener("DOMContentLoaded", () => {
    // 1. Verificação de Segurança
    if (localStorage.getItem("logado") !== "true") {
        window.location.href = "../pages/login.html";
        return;
    }

    // 2. Ativa a busca em tempo real
    const inputBusca = document.getElementById('pesquisar');
    if (inputBusca) {
        inputBusca.addEventListener('keyup', Pesquisar);
    }

    // --- 3. Lógica do Carrossel de Banners ---
    const slidesContainer = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;

    // Só inicia o carrossel se os elementos existirem na página
    if (slidesContainer && slides.length > 0) {
        setInterval(() => {
            currentIndex++;
            
            // Se chegar no último, volta para o primeiro
            if (currentIndex >= slides.length) {
                currentIndex = 0;
            }
            
            // Move o container lateralmente
            const offset = -currentIndex * 100;
            slidesContainer.style.transform = `translateX(${offset}%)`;
        }, 5000); // Troca a cada 5 segundos
    }
});

// Função de Pesquisa: Filtra os cards de pizza
function Pesquisar() {
    const input = document.getElementById('pesquisar').value.toLowerCase();
    const cards = document.querySelectorAll('.pizza-card');

    cards.forEach(card => {
        const nomePizza = card.querySelector('h3').innerText.toLowerCase();
        card.style.display = nomePizza.includes(input) ? "flex" : "none";
    });
}

// Função de Logout
function logout() { 
    localStorage.removeItem("logado"); 
    localStorage.removeItem("usuarioNome"); 
    window.location.href = "../pages/login.html"; 
}