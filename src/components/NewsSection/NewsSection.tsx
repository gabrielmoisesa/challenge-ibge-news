import './NewsSection.css';
import { useContext, useState } from 'react';
import SortNews from '../SortNews/SortNews';
import GlobalContext from '../../context/GlobalContext';
import NewsArticle from '../NewsArticle/NewsArticle';
import { NewsArticleProps } from '../../types';

function NewsSection() {
  const { data, isPending, error } = useContext(GlobalContext);
  const [filter, setFilter] = useState('');

  if (isPending) return <p>Carregando...</p>;
  if (error) return <p>{JSON.stringify(error)}</p>;
  if (!data || !data.items || data.items.length === 0) {
    return <p>Não há dados disponíveis</p>;
  }

  const favorites = JSON.parse(localStorage.getItem('favoriteArticles') || '[]');

  let filteredNews = data.items.slice(1);

  if (filter === 'Notícia') {
    filteredNews = data.items.filter((item) => item.tipo === filter);
  } else if (filter === 'Release') {
    filteredNews = data.items.filter((item) => item.tipo === filter);
  } else if (filter === 'Favoritas') {
    filteredNews = favorites;
  }

  const selectedFilterClassName = 'selected-filter';

  return (
    <section className="news-section">
      <div className="news-filters-container">
        <div className="filters-container">
          <button onClick={ () => setFilter('') }>
            <span
              className={ filter === '' ? selectedFilterClassName : '' }
            >
              Mais recentes
            </span>
          </button>
          <button onClick={ () => setFilter('Release') }>
            <span
              className={ filter === 'Release' ? selectedFilterClassName : '' }
            >
              Release
            </span>
          </button>
          <button onClick={ () => setFilter('Notícia') }>
            <span
              className={ filter === 'Notícia' ? selectedFilterClassName : '' }
            >
              Notícia
            </span>
          </button>
          <button onClick={ () => setFilter('Favoritas') }>
            <span
              className={ filter === 'Favoritas' ? selectedFilterClassName : '' }
            >
              Favoritas
            </span>
          </button>
        </div>
        <SortNews />
      </div>
      <div className="news-article-container">
        {filteredNews.map((item: NewsArticleProps) => (
          <NewsArticle
            key={ item.id }
            id={ item.id }
            titulo={ item.titulo }
            introducao={ item.introducao }
            data_publicacao={ item.data_publicacao }
            link={ item.link }
          />
        ))}
      </div>
    </section>
  );
}

export default NewsSection;
