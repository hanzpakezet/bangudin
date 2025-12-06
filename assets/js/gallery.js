const galleryImages = [
  "https://raw.githubusercontent.com/hanzpakezet/bangudin/main/assets/img/SERTI%202/SERTI%20FARCHANUDIN%20KOMPRES_Page1.jpg",
  "https://raw.githubusercontent.com/hanzpakezet/bangudin/main/assets/img/SERTI%202/SERTI%20FARCHANUDIN%20KOMPRES_Page2.jpg",
  "https://raw.githubusercontent.com/hanzpakezet/bangudin/main/assets/img/SERTI%202/SERTI%20FARCHANUDIN%20KOMPRES_Page3.jpg",
  "https://raw.githubusercontent.com/hanzpakezet/bangudin/main/assets/img/SERTI%202/SERTI%20FARCHANUDIN%20KOMPRES_Page4.jpg",
  "https://raw.githubusercontent.com/hanzpakezet/bangudin/main/assets/img/SERTI%202/SERTI%20FARCHANUDIN%20KOMPRES_Page5.jpg",
  "https://raw.githubusercontent.com/hanzpakezet/bangudin/main/assets/img/SERTI%202/SERTI%20FARCHANUDIN%20KOMPRES_Page6.jpg",
  "https://raw.githubusercontent.com/hanzpakezet/bangudin/main/assets/img/SERTI%202/SERTI%20FARCHANUDIN%20KOMPRES_Page7.jpg",
  "https://raw.githubusercontent.com/hanzpakezet/bangudin/main/assets/img/SERTI%202/SERTI%20FARCHANUDIN%20KOMPRES_Page8.jpg",
  "https://raw.githubusercontent.com/hanzpakezet/bangudin/main/assets/img/SERTI%202/SERTI%20FARCHANUDIN%20KOMPRES_Page9.jpg",
  "https://raw.githubusercontent.com/hanzpakezet/bangudin/main/assets/img/SERTI%202/SERTI%20FARCHANUDIN%20KOMPRES_Page10.jpg",
  "https://raw.githubusercontent.com/hanzpakezet/bangudin/main/assets/img/SERTI%202/SERTI%20FARCHANUDIN%20KOMPRES_Page11.jpg",
  "https://raw.githubusercontent.com/hanzpakezet/bangudin/main/assets/img/SERTI%202/SERTI%20FARCHANUDIN%20KOMPRES_Page12.jpg",
  "https://raw.githubusercontent.com/hanzpakezet/bangudin/main/assets/img/SERTI%202/SERTI%20FARCHANUDIN%20KOMPRES_Page13.jpg",
  "https://raw.githubusercontent.com/hanzpakezet/bangudin/main/assets/img/SERTI%202/SERTI%20FARCHANUDIN%20KOMPRES_Page14.jpg",
  "https://raw.githubusercontent.com/hanzpakezet/bangudin/main/assets/img/SERTI%202/SERTI%20FARCHANUDIN%20KOMPRES_Page15.jpg",
  "https://raw.githubusercontent.com/hanzpakezet/bangudin/main/assets/img/SERTI%202/SERTI%20FARCHANUDIN%20KOMPRES_Page16.jpg",
  "https://raw.githubusercontent.com/hanzpakezet/bangudin/main/assets/img/SERTI%202/SERTI%20FARCHANUDIN%20KOMPRES_Page17.jpg",
  "https://raw.githubusercontent.com/hanzpakezet/bangudin/main/assets/img/SERTI%202/SERTI%20FARCHANUDIN%20KOMPRES_Page18.jpg",
  "https://raw.githubusercontent.com/hanzpakezet/bangudin/main/assets/img/SERTI%202/SERTI%20FARCHANUDIN%20KOMPRES_Page19.jpg",
  "https://raw.githubusercontent.com/hanzpakezet/bangudin/main/assets/img/SERTI%202/SERTI%20FARCHANUDIN%20KOMPRES_Page20.jpg",
  "https://raw.githubusercontent.com/hanzpakezet/bangudin/main/assets/img/SERTI%202/SERTI%20FARCHANUDIN%20KOMPRES_Page21.jpg",
  "https://raw.githubusercontent.com/hanzpakezet/bangudin/main/assets/img/SERTI%202/SERTI%20FARCHANUDIN%20KOMPRES_Page22.jpg",
  "https://raw.githubusercontent.com/hanzpakezet/bangudin/main/assets/img/SERTI%202/SERTI%20FARCHANUDIN%20KOMPRES_Page23.jpg",
  "https://raw.githubusercontent.com/hanzpakezet/bangudin/main/assets/img/SERTI%202/SERTI%20FARCHANUDIN%20KOMPRES_Page24.jpg",
  "https://raw.githubusercontent.com/hanzpakezet/bangudin/main/assets/img/SERTI%202/SERTI%20FARCHANUDIN%20KOMPRES_Page25.jpg",
  "https://raw.githubusercontent.com/hanzpakezet/bangudin/main/assets/img/SERTI%202/SERTI%20FARCHANUDIN%20KOMPRES_Page26.jpg",
  "https://raw.githubusercontent.com/hanzpakezet/bangudin/main/assets/img/SERTI%202/SERTI%20FARCHANUDIN%20KOMPRES_Page27.jpg",
  "https://raw.githubusercontent.com/hanzpakezet/bangudin/main/assets/img/SERTI%202/SERTI%20FARCHANUDIN%20KOMPRES_Page28.jpg",
  "https://raw.githubusercontent.com/hanzpakezet/bangudin/main/assets/img/SERTI%202/SERTI%20FARCHANUDIN%20KOMPRES_Page29.jpg",
  "https://raw.githubusercontent.com/hanzpakezet/bangudin/main/assets/img/SERTI%202/SERTI%20FARCHANUDIN%20KOMPRES_Page30.jpg",
  "https://raw.githubusercontent.com/hanzpakezet/bangudin/main/assets/img/SERTI%202/SERTI%20FARCHANUDIN%20KOMPRES_Page31.jpg",
  "https://raw.githubusercontent.com/hanzpakezet/bangudin/main/assets/img/SERTI%202/SERTI%20FARCHANUDIN%20KOMPRES_Page32.jpg",
  "https://raw.githubusercontent.com/hanzpakezet/bangudin/main/assets/img/SERTI%202/SERTI%20FARCHANUDIN%20KOMPRES_Page33.jpg",
  "https://raw.githubusercontent.com/hanzpakezet/bangudin/main/assets/img/SERTI%202/SERTI%20FARCHANUDIN%20KOMPRES_Page34.jpg"
];


(function(){
 
  const perPage = 8;
  let currentPage = 1;

  // elements
  const grid = document.getElementById("gallery-grid");
  const paginationEl = document.getElementById("pagination");
  const sectionEl = document.getElementById("gallery");

  if (!grid || !paginationEl) {
    console.error("Gallery: element gallery-grid or pagination not found.");
    return;
  }

  // set mobile class for 2-col if small screen
  function applyMobile2Col() {
    if (window.innerWidth <= 600) {
      grid.classList.add("gallery-mobile-2col");
    } else {
      grid.classList.remove("gallery-mobile-2col");
    }
  }

  // render one page
  function renderPage() {
    const start = (currentPage - 1) * perPage;
    const end = start + perPage;
    const pageImgs = images.slice(start, end);

    // clear
    grid.innerHTML = "";

    // create nodes
    pageImgs.forEach(src => {
      const col = document.createElement("div");
      col.className = "cert-col";
      col.innerHTML = `
        <div class="card border-0 h-100">
          <img loading="lazy" src="${src}" alt="Sertifikat" class="cert-img">
        </div>
      `;
      grid.appendChild(col);
    });

    // update pagination
    renderPagination();
  }

  // render pagination buttons
  function renderPagination() {
    const total = Math.ceil(images.length / perPage);
    paginationEl.innerHTML = "";

    // Prev
    const prev = document.createElement("button");
    prev.className = "page-btn";
    prev.textContent = "Prev";
    prev.onclick = function() { gotoPage(currentPage - 1); };
    paginationEl.appendChild(prev);

    // pages (1..total)
    for (let i = 1; i <= total; i++) {
      const btn = document.createElement("button");
      btn.className = "page-btn" + (i === currentPage ? " active" : "");
      btn.textContent = i;
      btn.onclick = (function(p){ return function(){ gotoPage(p); }; })(i);
      paginationEl.appendChild(btn);
    }

    // Next
    const next = document.createElement("button");
    next.className = "page-btn";
    next.textContent = "Next";
    next.onclick = function() { gotoPage(currentPage + 1); };
    paginationEl.appendChild(next);
  }

  // navigate
  function gotoPage(p) {
    const max = Math.ceil(images.length / perPage);
    if (p < 1) p = 1;
    if (p > max) p = max;
    if (p === currentPage) return;
    currentPage = p;
    renderPage();

    // smooth scroll to top of gallery section
    if (sectionEl) sectionEl.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  // initial
  applyMobile2Col();
  renderPage();

  // update on resize
  window.addEventListener("resize", function(){
    applyMobile2Col();
  });

  // expose for debugging (optional)
  window._myGallery = { images, renderPage, gotoPage };

})();
