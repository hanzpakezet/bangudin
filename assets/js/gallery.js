(function(){
  // DIRECT LINKS (imgbb correct domain 'i.ibb.co')
  const images = [
    "https://i.ibb.co/fzcQRmJS/SERTI-FARCHANUDIN-KOMPRES-Page1.png",
    "https://i.ibb.co/HLSm43rJ/SERTI-FARCHANUDIN-KOMPRES-Page2.png",
    "https://i.ibb.co/hR8JLXcj/SERTI-FARCHANUDIN-KOMPRES-Page3.png",
    "https://i.ibb.co/qF3yZvbn/SERTI-FARCHANUDIN-KOMPRES-Page4.png",
    "https://i.ibb.co/DfDYxq2M/SERTI-FARCHANUDIN-KOMPRES-Page5.png",
    "https://i.ibb.co/9mfvDtX7/SERTI-FARCHANUDIN-KOMPRES-Page6.png",
    "https://i.ibb.co/Ng9n9jjc/SERTI-FARCHANUDIN-KOMPRES-Page7.png",
    "https://i.ibb.co/Gv6RV1P9/SERTI-FARCHANUDIN-KOMPRES-Page8.png",
    "https://i.ibb.co/ZzCzFW5m/SERTI-FARCHANUDIN-KOMPRES-Page9.png",
    "https://i.ibb.co/604ygPPB/SERTI-FARCHANUDIN-KOMPRES-Page10.png",
    "https://i.ibb.co/XxxVp9wh/SERTI-FARCHANUDIN-KOMPRES-Page11.png",
    "https://i.ibb.co/zWp0cvxJ/SERTI-FARCHANUDIN-KOMPRES-Page12.png",
    "https://i.ibb.co/35sgBd8V/SERTI-FARCHANUDIN-KOMPRES-Page13.png",
    "https://i.ibb.co/6JRFnL4B/SERTI-FARCHANUDIN-KOMPRES-Page14.png",
    "https://i.ibb.co/tTz7ZKNt/SERTI-FARCHANUDIN-KOMPRES-Page15.png",
    "https://i.ibb.co/271QnkSN/SERTI-FARCHANUDIN-KOMPRES-Page16.png",
    "https://i.ibb.co/6RZ8YkF8/SERTI-FARCHANUDIN-KOMPRES-Page17.png",
    "https://i.ibb.co/n8PtFNg6/SERTI-FARCHANUDIN-KOMPRES-Page18.png",
    "https://i.ibb.co/svwjs1MW/SERTI-FARCHANUDIN-KOMPRES-Page19.png",
    "https://i.ibb.co/rRbtZTpv/SERTI-FARCHANUDIN-KOMPRES-Page20.png",
    "https://i.ibb.co/Lh8TN8Dy/SERTI-FARCHANUDIN-KOMPRES-Page21.png",
    "https://i.ibb.co/ZRJywrf1/SERTI-FARCHANUDIN-KOMPRES-Page22.png",
    "https://i.ibb.co/jv8fLP6x/SERTI-FARCHANUDIN-KOMPRES-Page23.png",
    "https://i.ibb.co/0pxtVwzX/SERTI-FARCHANUDIN-KOMPRES-Page24.png",
    "https://i.ibb.co/C5gKccDG/SERTI-FARCHANUDIN-KOMPRES-Page25.png",
    "https://i.ibb.co/5gcQQQxC/SERTI-FARCHANUDIN-KOMPRES-Page26.png",
    "https://i.ibb.co/1fgcVJnx/SERTI-FARCHANUDIN-KOMPRES-Page27.png",
    "https://i.ibb.co/BVPc74QW/SERTI-FARCHANUDIN-KOMPRES-Page28.png",
    "https://i.ibb.co/fV0S3Dj9/SERTI-FARCHANUDIN-KOMPRES-Page29.png",
    "https://i.ibb.co/pBmM2XTS/SERTI-FARCHANUDIN-KOMPRES-Page30.png",
    "https://i.ibb.co/G35wVnT1/SERTI-FARCHANUDIN-KOMPRES-Page31.png",
    "https://i.ibb.co/QjpcCnh4/SERTI-FARCHANUDIN-KOMPRES-Page32.png",
    "https://i.ibb.co/21gq5PVh/SERTI-FARCHANUDIN-KOMPRES-Page33.png",
    "https://i.ibb.co/Q35wWfsX/SERTI-FARCHANUDIN-KOMPRES-Page34.png"
  ];

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
