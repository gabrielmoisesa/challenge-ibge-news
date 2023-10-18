import './NewsSection.css';
import { useContext, useEffect, useState } from 'react';
import SortNews from '../SortNews/SortNews';
import GlobalContext from '../../context/GlobalContext';
import NewsArticle from '../NewsArticle/NewsArticle';
import { NewsArticleProps } from '../../types';
import ButtonLoadMoreNews from '../ButtonLoadMoreNews/ButtonLoadMoreNews';

function NewsSection() {
  const { data, isPending, error, favoriteRender } = useContext(GlobalContext);
  const [filter, setFilter] = useState('');
  const [favorites, setFavorites] = useState<NewsArticleProps[]>([]);

  useEffect(() => {
    const favoritesArticles = JSON.parse(
      localStorage.getItem('favoriteArticles') || '[]',
    );
    setFavorites(favoritesArticles);
  }, [favoriteRender]);

  if (isPending) return <p>Carregando...</p>;
  if (error) return <p>{JSON.stringify(error)}</p>;
  if (!data || !data.items || data.items.length === 0) {
    return <p>Não há dados disponíveis</p>;
  }

  const getFilteredNews = (selectedFilter: string) => {
    switch (selectedFilter) {
      case 'Notícia':
      case 'Release':
        return data.items.filter((item) => item.tipo === selectedFilter);
      case 'Favoritas':
        return favorites;
      default:
        return data.items.slice(1);
    }
  };

  const filteredNews = getFilteredNews(filter);
  const selectedFilterClassName = 'selected-filter';

  return (
    <section className="news-section">
      <div className="news-filters-container">
        <div className="filters-container">
          <button onClick={ () => setFilter('') }>
            <span className={ filter === '' ? selectedFilterClassName : '' }>
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
        {filter === 'Favoritas' && filteredNews.length <= 0
          ? <p className="no-fav-news-message">Não há notícias favoritas...</p>
          : filteredNews.map((item: NewsArticleProps) => (
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
      {filter !== 'Favoritas' && (
        <div className="button-load-more-news-container">
          <ButtonLoadMoreNews />
        </div>
      )}
    </section>
  );
}

export default NewsSection;
