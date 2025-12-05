document.addEventListener("DOMContentLoaded", function () {

  const galleryGrid = document.getElementById("gallery-grid");

  function setGalleryColumns() {
    if (window.innerWidth <= 600) {
      galleryGrid.classList.add("gallery-mobile-2col");
    } else {
      galleryGrid.classList.remove("gallery-mobile-2col");
    }
  }

  // Jalankan saat load dan resize
  setGalleryColumns();
  window.addEventListener("resize", setGalleryColumns);

});
