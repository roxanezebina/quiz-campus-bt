const SITE_CONFIG = {
  whatsappGroupUrl: "https://chat.whatsapp.com/F7yrRukPSyhCHwSkdSdQDN",
  contactEmail: "r.zebina@bordeaux-tourisme.com"
};

const NAV_ITEMS = [
  { id: "home", href: "index.html", label: "Accueil" },
  { id: "quiz", href: "quiz.html", label: "Le quiz" },
  { id: "plans", href: "bons-plans.html", label: "Bons plans" },
  { id: "team", href: "equipe.html", label: "Qui sommes-nous ?" },
  { id: "data", href: "donnees.html", label: "Tes données" }
];

function renderHeader() {
  const target = document.querySelector("[data-site-header]");
  if (!target) return;

  const activePage = document.body.dataset.page || "";
  const navLinks = NAV_ITEMS.map(item => {
    const activeClass = item.id === activePage ? ' class="active" aria-current="page"' : "";
    return `<a href="${item.href}"${activeClass}>${item.label}</a>`;
  }).join("");

  target.innerHTML = `
    <header class="site-header">
      <a class="brand" href="index.html" aria-label="Campus Bordeaux Tourisme">
        <img
          src="assets/campus-logo-placeholder.svg"
          alt="Logo Campus Bordeaux Tourisme"
          class="header-campus-logo"
        >
      </a>

      <button
        class="menu-toggle"
        type="button"
        aria-label="Ouvrir le menu"
        aria-expanded="false"
        aria-controls="main-navigation"
      >
        ☰
      </button>

      <nav id="main-navigation" aria-label="Navigation principale">
        ${navLinks}
      </nav>
    </header>
  `;
}

function renderFooter() {
  const target = document.querySelector("[data-site-footer]");
  if (!target) return;

  target.innerHTML = `
    <footer class="site-footer">
      <div class="footer-inner">
        <span>Le Campus Bordeaux Tourisme</span>

        <div class="footer-project">
          <span>Un projet de l'Office de Tourisme et des Congrès de Bordeaux Métropole
            <br/><img
              src="assets/bordeaux-tourisme-logo.png"
              alt="Logo Bordeaux Tourisme"
              class="footer-bt-logo"
            >
        </span>
        </div>
      </div>
    </footer>
  `;
}

function initMobileMenu() {
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".site-header nav");
  if (!menuButton || !nav) return;

  menuButton.addEventListener("click", () => {
    const opened = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(opened));
  });

  nav.addEventListener("click", event => {
    if (event.target.closest("a")) {
      nav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    }
  });
}

function initWhatsAppLinks() {
  document.querySelectorAll(".whatsapp-link").forEach(link => {
    link.href = SITE_CONFIG.whatsappGroupUrl || "#";

    link.addEventListener("click", event => {
      if (!SITE_CONFIG.whatsappGroupUrl) {
        event.preventDefault();
        alert("Ajoute le lien d’invitation du groupe WhatsApp dans components.js.");
      }
    });
  });
}

function initContactLinks() {
  document.querySelectorAll("[data-contact-email]").forEach(link => {
    link.href = `mailto:${SITE_CONFIG.contactEmail}`;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderFooter();
  initMobileMenu();
  initWhatsAppLinks();
  initContactLinks();
});
