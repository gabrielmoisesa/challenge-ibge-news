import './NewsSection.css';
import SortNews from '../SortNews/SortNews';

function NewsSection() {
  return (
    <section className="news-section">
      <div className="news-filters-container">
        <div className="filters-container">
          <button>Mais recentes</button>
          <button>Release</button>
          <button>Notícia</button>
          <button>Favoritas</button>
        </div>
        <SortNews />
      </div>
    </section>
  );
}

export default NewsSection;
