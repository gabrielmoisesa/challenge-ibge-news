import './NewsSection.css';
import { useContext, useState } from 'react';
import SortNews from '../SortNews/SortNews';
import GlobalContext from '../../context/GlobalContext';
import NewsArticle from '../NewsArticle/NewsArticle';

function NewsSection() {
  const { data, isPending, error } = useContext(GlobalContext);
  const [filter, setFilter] = useState('');

  if (isPending) return <p>Carregando...</p>;
  if (error) return <p>{JSON.stringify(error)}</p>;
  if (!data || !data.items || data.items.length === 0) {
    return <p>Não há dados disponíveis</p>;
  }

  const filteredNews = (filter === 'Notícia' || filter === 'Release')
    ? data.items.filter((item) => item.tipo === filter)
    : data.items.slice(1);

  return (
    <section className="news-section">
      <div className="news-filters-container">
        <div className="filters-container">
          <button onClick={ () => setFilter('') }>Mais recentes</button>
          <button onClick={ () => setFilter('Release') }>Release</button>
          <button onClick={ () => setFilter('Notícia') }>Notícia</button>
          <button>Favoritas</button>
        </div>
        <SortNews />
      </div>
      <div className="news-article-container">
        {filteredNews.map((item) => (
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
