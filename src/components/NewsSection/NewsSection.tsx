import './NewsSection.css';
import { useContext } from 'react';
import SortNews from '../SortNews/SortNews';
import GlobalContext from '../../context/GlobalContext';
import NewsArticle from '../NewsArticle/NewsArticle';

function NewsSection() {
  const { data, isPending, error } = useContext(GlobalContext);

  if (isPending) return <p>Carregando...</p>;
  if (error) return <p>{JSON.stringify(error)}</p>;
  if (!data || !data.items || data.items.length === 0) {
    return <p>Não há dados disponíveis</p>;
  }

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
      <div className="news-article-container">
        {data.items.slice(1).map((item) => (
          <NewsArticle
            key={ item.id }
            title={ item.titulo }
            description={ item.introducao }
            date={ item.data_publicacao }
            link={ item.link }
          />
        ))}
      </div>
    </section>
  );
}

export default NewsSection;
