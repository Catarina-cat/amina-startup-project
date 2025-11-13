document.addEventListener("DOMContentLoaded", () => {
  // --- LÓGICA DO MENU HAMBÚRGUER ---
  const menuToggle = document.querySelector(".menu-toggle");
  const mainNav = document.querySelector(".main-nav");

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      mainNav.classList.toggle("is-open");
    });
  }

  // --- LÓGICA DO FORMULÁRIO DE CONTATO ---
  const contactForm = document.getElementById("contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault(); // Impede o envio padrão do formulário

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !message) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
      }

      // Validação simples de e-mail
      if (!email.includes("@") || !email.includes(".")) {
        alert("Por favor, insira um endereço de e-mail válido.");
        return;
      }

      alert("Mensagem enviada com sucesso! Agradecemos o seu contato.");
      contactForm.reset();
    });
  }

  // --- LÓGICA DE LOGOUT ---
  // Procura pelo botão/link de logout em todas as páginas protegidas
  const logoutButton = document.getElementById("logout-button");

  if (logoutButton) {
    logoutButton.addEventListener("click", (event) => {
      event.preventDefault(); // Previne o comportamento padrão do link

      // Remove a chave de autenticação do sessionStorage
      sessionStorage.removeItem("isLoggedIn");

      // Avisa o usuário e redireciona para o login
      alert("Você saiu com segurança.");
      window.location.href = "index.html";
    });
  }

 // --- LÓGICA DE TEMAS E FONTES ---
  const themeToggle = document.getElementById("theme-toggle");
  const fontIncrease = document.getElementById("font-increase");
  const fontDecrease = document.getElementById("font-decrease");
  const body = document.body;

  // Verifica o tema salvo no localStorage
  const currentTheme = localStorage.getItem("theme");

  // Aplica o tema salvo assim que a página carrega
  if (currentTheme === "dark") {
    body.classList.add("theme-dark");
  }

  let currentFontSize = 1; // 1 = 100% (1rem)

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      // 3. Alterna a classe como antes
      body.classList.toggle("theme-dark");

      // 4. Salva a nova preferência no localStorage
      if (body.classList.contains("theme-dark")) {
        localStorage.setItem("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
      }
    });
  }

  if (fontIncrease) {
    fontIncrease.addEventListener("click", () => {
      if (currentFontSize < 1.5) { // Limite de 150%
        currentFontSize += 0.1;
        document.documentElement.style.fontSize = `${currentFontSize}rem`;
        window.scrollTo(0, document.body.scrollHeight);
      }
    });
  }

  if (fontDecrease) {
    fontDecrease.addEventListener("click", () => {
      if (currentFontSize > 0.8) { // Limite de 80%
        currentFontSize -= 0.1;
        document.documentElement.style.fontSize = `${currentFontSize}rem`;
      }
    });
  }
});
