document.addEventListener("DOMContentLoaded", function () {
  const instructionLink = document.getElementById("instructionLink");
  const modalWrapper = document.querySelector(".modal-wrapper");
  let isModalDisplay = false;

  instructionLink.addEventListener("click", function (e) {
    e.preventDefault();
    if (!isModalDisplay) {
      // Désactive les interactions avec les éléments sous le modal
      document.body.style.overflow = "hidden";
      modalWrapper.style.pointerEvents = "auto";
      createModal();
      afficherModal();
      isModalDisplay = true;
    } else {
      // Réactive les interactions avec les éléments sous le modal
      document.body.style.overflow = "auto";
      modalWrapper.style.pointerEvents = "none";
      afficherModal();
      isModalDisplay = false;
    }
  });

  /* Fonction de création du modal (basée sur votre code) */
  function createModal() {
    modalWrapper.innerHTML = "";
    let cross = document.createElement("i");
    cross.className = "close-modal";
    cross.innerHTML = "&times;";
    cross.addEventListener("click", function () {
      afficherModal();
    });

    const modal = document.createElement("div");
    modal.className = "modal";
    modal.appendChild(cross);

    // Ajoutez des styles CSS pour centrer le modal
    modal.style.position = "fixed";
    modal.style.top = "50%";
    modal.style.left = "50%";
    modal.style.transform = "translate(-50%, -50%)"; // Pour centrer verticalement et horizontalement

    // Autres éléments du modal ici (boutons, images, etc.)

    modalWrapper.appendChild(modal);

    // Ajoutez d'autres éléments au modal ici

    const PicoloImage = document.createElement("img");
    PicoloImage.className = "picolo-modal";
    PicoloImage.src = "../assets/piccolo.webp";
    modal.appendChild(PicoloImage);

    const modalParagraph = document.createElement("p");
    modalParagraph.className = "regle-modal";
    modalParagraph.textContent = "Les Regles du Jeu :";
    modal.appendChild(modalParagraph);

    const regleParagraph = document.createElement("p");
    regleParagraph.className = "regle-text";
    regleParagraph.textContent =
      "Chaque participant doit spammer sa touche le plus rapidement possible pour gagner le combat ! ";
    modal.appendChild(regleParagraph);

    const controlGame = document.createElement("p");
    controlGame.className = "control-text";
    controlGame.textContent =
      "Joueur Manette : Tourner le joystick comme sur Tenkachi Budokai : ";
    modal.appendChild(controlGame);

    const modalImage = document.createElement("img");
    modalImage.className = "img-modal";
    modalImage.src = "../assets/spam_technique.webp";
    modalImage.className = "modal-image";
    modal.appendChild(modalImage);

    const controlGame2 = document.createElement("p");
    controlGame2.className = "control-text2";
    controlGame2.textContent =
      "Joueur Clavier-souris : Un joueur utilise le bouton gauche de la souris, tandis que l'autre utilise la barre espace ! ";
    modal.appendChild(controlGame2);

    const controlGame3 = document.createElement("p");
    controlGame3.className = "control-text3";
    controlGame3.textContent =
      "Attention : Un joueur avec une manette ne peut pas affronter un joueur clavier-souris";
    modal.appendChild(controlGame3);

    const controlGame4 = document.createElement("p");
    controlGame4.className = "control-text";
    controlGame4.textContent =
      "Tu peux mettre le jeu en plein écran pour une meilleure expérience ! ";
    modal.appendChild(controlGame4);
  }

  /* Fonction pour afficher ou masquer le modal */
  function afficherModal() {
    if (isModalDisplay) {
      modalWrapper.style.display = "none";
      isModalDisplay = false;
    } else {
      modalWrapper.style.display = "block";
      isModalDisplay = true;
    }
  }
});
