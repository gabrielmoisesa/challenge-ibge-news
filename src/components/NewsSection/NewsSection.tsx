import './NewsSection.css';

function NewsSection() {
  return (
    <section className="news-section">
      <div className="news-filters-container">
        <button>Mais recentes</button>
        <button>Release</button>
        <button>Notícia</button>
        <button>Favoritas</button>
      </div>
    </section>
  );
}

export default NewsSection;
