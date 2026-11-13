document.addEventListener("DOMContentLoaded", () => {
  const openModalBtn = document.querySelector(".hero .button");
  const closeModalBtn = document.querySelector(".modal-close-btn");
  const modal = document.querySelector(".backdrop");

  if (!openModalBtn || !modal) return;

  openModalBtn.addEventListener("click", () => {
    modal.classList.add("is-open");
  });

  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", () => {
      modal.classList.remove("is-open");
    });
  }

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.classList.remove("is-open");
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("is-open")) {
      modal.classList.remove("is-open");
    }
  });
});
