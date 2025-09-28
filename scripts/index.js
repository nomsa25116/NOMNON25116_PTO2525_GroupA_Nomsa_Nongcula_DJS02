import { podcasts } from "./data.js";
import { createModal } from "./components/modal.js";
import { createGrid } from "./components/createGrid.js";

/**
 * Initializes the podcast application.
 *
 * @principle SRP - Only responsible for application startup logic like event binding and rendering initial grid.
 */
function init() {
  document
    .getElementById("closeModal")
    .addEventListener("click", createModal.close);
  const grid = createGrid();
  grid.render(podcasts);
}

init();