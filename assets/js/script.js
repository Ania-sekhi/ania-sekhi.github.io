// Petit script du site : trois améliorations simples.

// 1. Mettre en bleu le bouton du menu de la page où l'on se trouve
const pageActuelle = window.location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".nav nav a").forEach(function (lien) {
  if (lien.getAttribute("href") === pageActuelle) {
    lien.classList.add("actif");
  }
});

// 2. Bouton « Haut de page » qui apparaît quand on descend
const boutonHaut = document.createElement("button");
boutonHaut.className = "haut-de-page";
boutonHaut.textContent = "↑";
boutonHaut.setAttribute("aria-label", "Revenir en haut de la page");
document.body.appendChild(boutonHaut);

window.addEventListener("scroll", function () {
  boutonHaut.classList.toggle("visible", window.scrollY > 300);
});

boutonHaut.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// 3. Page Contact : compteur de caractères sous le message
const message = document.getElementById("message");
if (message) {
  const compteur = document.createElement("p");
  compteur.className = "compteur";
  message.after(compteur);

  function mettreAJour() {
    compteur.textContent = message.value.length + " caractère(s)";
  }
  message.addEventListener("input", mettreAJour);
  mettreAJour();
}
