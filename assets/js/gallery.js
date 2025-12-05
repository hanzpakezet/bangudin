document.addEventListener("DOMContentLoaded", () => {
    let currentPage = 1;
    const itemsPerPage = 8;

    function loadGallery(page) {
        const container = document.getElementById("gallery-container");
        container.innerHTML = "";

        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const sliced = images.slice(start, end);

        sliced.forEach(src => {
            const img = document.createElement("img");
            img.src = src;
            img.className = "gallery-item";
            container.appendChild(img);
        });

        createPagination();
    }

    function createPagination() {
        const totalPages = Math.ceil(images.length / itemsPerPage);
        const pagination = document.getElementById("pagination");
        pagination.innerHTML = "";

        for (let i = 1; i <= totalPages; i++) {
            const btn = document.createElement("button");
            btn.innerText = i;

            btn.className = (i === currentPage) ? "active" : "";

            btn.addEventListener("click", () => {
                currentPage = i;
                loadGallery(i);
            });

            pagination.appendChild(btn);
        }
    }

    loadGallery(currentPage);
});
