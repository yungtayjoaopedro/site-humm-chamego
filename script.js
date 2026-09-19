// =========================================
// HUMM CHAMEGO! — Script principal
// Propositalmente simples: só o essencial
// para o menu funcionar bem no celular.
// =========================================

// Abre e fecha o menu no celular
const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");

navToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", isOpen);
});

// Fecha o menu automaticamente ao clicar em um link
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// Atualiza o ano do rodapé automaticamente
document.getElementById("ano").textContent = new Date().getFullYear();
