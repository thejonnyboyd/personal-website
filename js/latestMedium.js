document.addEventListener("DOMContentLoaded", function () {
    const articlesContainer = document.getElementById("articles-container");
    const rssUrl = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@thejonnyboyd";

    function extractThumbnailFromContent(content) {
      const imgTagMatch = content.match(/<img[^>]+src="([^">]+)"/);
      return imgTagMatch ? imgTagMatch[1] : null;
    }

    fetch(rssUrl)
      .then((response) => response.json())
      .then((data) => {
        const articles = data.items.slice(0, 3);
        articles.forEach((article) => {
          const thumbnail = article.thumbnail || extractThumbnailFromContent(article.description);
          const publicationDate = new Date(article.pubDate).toLocaleDateString();
          const shortDescription = article.description.replace(/<\/?[^>]+(>|$)/g, "").substring(0, 150);

          const articleLink = document.createElement("a");
          articleLink.href = article.link;
          articleLink.target = "_blank";
          articleLink.classList.add("article-link");

          const articleCard = document.createElement("div");
          articleCard.classList.add("article-card");
          articleCard.innerHTML = `
            <div class="article-thumbnail-container">
              <img src="${thumbnail}" alt="${article.title}" class="article-thumbnail" />
            </div>
            <div class="article-content">
              <h3 class="article-title">${article.title}</h3>
              <p class="article-subtitle">${shortDescription}...</p>
              <p class="article-date">Published: ${publicationDate}</p>
            </div>
          `;

          articleLink.appendChild(articleCard);

          articlesContainer.appendChild(articleLink);
        });
      })
      .catch((error) => {
        console.error("Error fetching Medium articles:", error);
      });
  });
