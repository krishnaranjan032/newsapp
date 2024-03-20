
document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('search');
    const articles = document.querySelectorAll('.article');

    searchInput.addEventListener('input', function () {
        const searchTerm = searchInput.value.toLowerCase();

        articles.forEach(article => {
            const title = article.querySelector('h2').innerText.toLowerCase();
            const description = article.querySelector('p').innerText.toLowerCase();

            if (title.includes(searchTerm) || description.includes(searchTerm)) {
                article.style.display = 'block';
            } else {
                article.style.display = 'none';
            }
        });
    });
});

