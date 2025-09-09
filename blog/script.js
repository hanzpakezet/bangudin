document.addEventListener('DOMContentLoaded', function() {
    // Data artikel
    const articles = [
        {
            title: "Pentingnya Belajar Ilmu Agama di Usia Muda",
            image: "https://via.placeholder.com/600x400.png?text=Ilmu+Agama",
            excerpt: "Mempelajari ilmu agama sejak dini dapat membentuk karakter dan moral yang kuat...",
            link: "#"
        },
        {
            title: "Mengenal Perbedaan Software Open Source dan Berbayar",
            image: "https://via.placeholder.com/600x400.png?text=Open+Source",
            excerpt: "Artikel ini akan membahas keunggulan dan kekurangan dari software open source dan berbayar...",
            link: "#"
        },
        {
            title: "Tips Produktif Menggunakan Aplikasi Catatan Digital",
            image: "https://via.placeholder.com/600x400.png?text=Aplikasi+Catatan",
            excerpt: "Pelajari cara memaksimalkan penggunaan aplikasi catatan digital seperti Notion atau Evernote...",
            link: "#"
        },
        {
            title: "Memahami Konsep Dasar Pemrograman Web",
            image: "https://via.placeholder.com/600x400.png?text=Pemrograman+Web",
            excerpt: "Panduan singkat untuk pemula yang ingin terjun ke dunia pengembangan web. Mulai dari HTML, CSS, hingga JavaScript...",
            link: "#"
        },
    ];

    const blogPostsContainer = document.getElementById('blog-posts');

    articles.forEach(article => {
        const articleCol = document.createElement('div');
        articleCol.className = 'col-md-4 mb-4';
        
        const cardHtml = `
            <div class="card h-100">
                <img src="${article.image}" class="card-img-top" alt="${article.title}">
                <div class="card-body">
                    <h5 class="card-title">${article.title}</h5>
                    <p class="card-text">${article.excerpt}</p>
                    <a href="${article.link}" class="btn btn-primary btn-sm read-more-btn">Baca Selengkapnya</a>
                </div>
            </div>
        `;

        articleCol.innerHTML = cardHtml;
        blogPostsContainer.appendChild(articleCol);
    });
});
