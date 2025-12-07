const galleryImages = [
  //  1
  "https://raw.githubusercontent.com/hanzpakezet/bangudin/main/assets/img/SERTI%202/SERTI%20FARCHANUDIN%20KOMPRES_Page1.jpg",
  "https://raw.githubusercontent.com/hanzpakezet/bangudin/main/assets/img/SERTI%202/SERTI%20FARCHANUDIN%20KOMPRES_Page2.jpg",
  "https://raw.githubusercontent.com/hanzpakezet/bangudin/main/assets/img/SERTI%202/SERTI%20FARCHANUDIN%20KOMPRES_Page3.jpg",
  "https://raw.githubusercontent.com/hanzpakezet/bangudin/main/assets/img/SERTI%202/SERTI%20FARCHANUDIN%20KOMPRES_Page4.jpg",
  "https://raw.githubusercontent.com/hanzpakezet/bangudin/main/assets/img/SERTI%202/SERTI%20FARCHANUDIN%20KOMPRES_Page5.jpg",
  "https://raw.githubusercontent.com/hanzpakezet/bangudin/main/assets/img/SERTI%202/SERTI%20FARCHANUDIN%20KOMPRES_Page7.jpg",
  "https://raw.githubusercontent.com/hanzpakezet/bangudin/main/assets/img/SERTI%202/SERTI%20FARCHANUDIN%20KOMPRES_Page8.jpg",
  "https://raw.githubusercontent.com/hanzpakezet/bangudin/main/assets/img/SERTI%202/SERTI%20FARCHANUDIN%20KOMPRES_Page10.jpg",
  //  2
  "https://raw.githubusercontent.com/hanzpakezet/bangudin/main/assets/img/SERTI%202/SERTI%20FARCHANUDIN%20KOMPRES_Page6.jpg",
  "https://raw.githubusercontent.com/hanzpakezet/bangudin/main/assets/img/SERTI%202/SERTI%20FARCHANUDIN%20KOMPRES_Page9.jpg",
  "https://raw.githubusercontent.com/hanzpakezet/bangudin/main/assets/img/SERTI%202/SERTI%20FARCHANUDIN%20KOMPRES_Page15.jpg",
  "https://raw.githubusercontent.com/hanzpakezet/bangudin/main/assets/img/SERTI%202/SERTI%20FARCHANUDIN%20KOMPRES_Page18.jpg",
  "https://raw.githubusercontent.com/hanzpakezet/bangudin/main/assets/img/SERTI%202/SERTI%20FARCHANUDIN%20KOMPRES_Page19.jpg",
  "https://raw.githubusercontent.com/hanzpakezet/bangudin/main/assets/img/SERTI%202/SERTI%20FARCHANUDIN%20KOMPRES_Page27.jpg",
  "https://raw.githubusercontent.com/hanzpakezet/bangudin/main/assets/img/SERTI%202/SERTI%20FARCHANUDIN%20KOMPRES_Page28.jpg",
  "https://raw.githubusercontent.com/hanzpakezet/bangudin/main/assets/img/SERTI%202/SERTI%20FARCHANUDIN%20KOMPRES_Page31.jpg",
  // 3
  "https://raw.githubusercontent.com/hanzpakezet/bangudin/main/assets/img/SERTI%202/SERTI%20FARCHANUDIN%20KOMPRES_Page21.jpg",
  "https://raw.githubusercontent.com/hanzpakezet/bangudin/main/assets/img/SERTI%202/SERTI%20FARCHANUDIN%20KOMPRES_Page22.jpg",
  "https://raw.githubusercontent.com/hanzpakezet/bangudin/main/assets/img/SERTI%202/SERTI%20FARCHANUDIN%20KOMPRES_Page11.jpg",
  "https://raw.githubusercontent.com/hanzpakezet/bangudin/main/assets/img/SERTI%202/SERTI%20FARCHANUDIN%20KOMPRES_Page12.jpg",
  "https://raw.githubusercontent.com/hanzpakezet/bangudin/main/assets/img/SERTI%202/SERTI%20FARCHANUDIN%20KOMPRES_Page13.jpg",
  "https://raw.githubusercontent.com/hanzpakezet/bangudin/main/assets/img/SERTI%202/SERTI%20FARCHANUDIN%20KOMPRES_Page14.jpg",
  "https://raw.githubusercontent.com/hanzpakezet/bangudin/main/assets/img/SERTI%202/SERTI%20FARCHANUDIN%20KOMPRES_Page16.jpg",
  "https://raw.githubusercontent.com/hanzpakezet/bangudin/main/assets/img/SERTI%202/SERTI%20FARCHANUDIN%20KOMPRES_Page17.jpg",
  // 4
  "https://raw.githubusercontent.com/hanzpakezet/bangudin/main/assets/img/SERTI%202/SERTI%20FARCHANUDIN%20KOMPRES_Page20.jpg",
  "https://raw.githubusercontent.com/hanzpakezet/bangudin/main/assets/img/SERTI%202/SERTI%20FARCHANUDIN%20KOMPRES_Page24.jpg",
  "https://raw.githubusercontent.com/hanzpakezet/bangudin/main/assets/img/SERTI%202/SERTI%20FARCHANUDIN%20KOMPRES_Page25.jpg",
  "https://raw.githubusercontent.com/hanzpakezet/bangudin/main/assets/img/SERTI%202/SERTI%20FARCHANUDIN%20KOMPRES_Page26.jpg",
  "https://raw.githubusercontent.com/hanzpakezet/bangudin/main/assets/img/SERTI%202/SERTI%20FARCHANUDIN%20KOMPRES_Page29.jpg",
  "https://raw.githubusercontent.com/hanzpakezet/bangudin/main/assets/img/SERTI%202/SERTI%20FARCHANUDIN%20KOMPRES_Page30.jpg",
  "https://raw.githubusercontent.com/hanzpakezet/bangudin/main/assets/img/SERTI%202/SERTI%20FARCHANUDIN%20KOMPRES_Page32.jpg",
  "https://raw.githubusercontent.com/hanzpakezet/bangudin/main/assets/img/SERTI%202/SERTI%20FARCHANUDIN%20KOMPRES_Page33.jpg",
  // 5
  "https://raw.githubusercontent.com/hanzpakezet/bangudin/main/assets/img/SERTI%202/SERTI%20FARCHANUDIN%20KOMPRES_Page23.jpg",
  "https://raw.githubusercontent.com/hanzpakezet/bangudin/main/assets/img/SERTI%202/SERTI%20FARCHANUDIN%20KOMPRES_Page34.jpg"
];


(function () {

  const perPage = 8;
  let currentPage = 1;

  const grid = document.getElementById("certiGalleryGrid");
  const pagination = document.getElementById("certiPagination");
  const gallerySection = document.getElementById("certiGallery");

  if (!grid || !pagination) {
    console.error("Gallery grid/pagination not found!");
    return;
  }

  function renderPage() {
    const start = (currentPage - 1) * perPage;
    const end = start + perPage;
    const imgs = galleryImages.slice(start, end);

    grid.innerHTML = "";
    imgs.forEach(src => {
      const item = document.createElement("div");
      item.className = "certi-item";
      item.innerHTML = `
        <img src="${src}" loading="lazy" alt="Sertifikat">
      `;
      grid.appendChild(item);
    });

    renderPagination();
  }

  function renderPagination() {
    const total = Math.ceil(galleryImages.length / perPage);
    pagination.innerHTML = "";

    // Prev
    const prev = document.createElement("button");
    prev.textContent = "Prev";
    prev.className = "certi-page-btn";
    prev.onclick = () => gotoPage(currentPage - 1);
    pagination.appendChild(prev);

    // Pages
    for (let i = 1; i <= total; i++) {
      const btn = document.createElement("button");
      btn.textContent = i;
      btn.className = "certi-page-btn" + (i === currentPage ? " active" : "");
      btn.onclick = () => gotoPage(i);
      pagination.appendChild(btn);
    }

    // Next
    const next = document.createElement("button");
    next.textContent = "Next";
    next.className = "certi-page-btn";
    next.onclick = () => gotoPage(currentPage + 1);
    pagination.appendChild(next);
  }

  function gotoPage(p) {
    const max = Math.ceil(galleryImages.length / perPage);
    if (p < 1) p = 1;
    if (p > max) p = max;
    currentPage = p;

    renderPage();

    gallerySection.scrollIntoView({ behavior: "smooth" });
  }

  renderPage();

})();
