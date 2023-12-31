/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/naming-convention */
import { useState, useEffect, useContext } from 'react';
import './ButtonFavoriteNews.css';
import { NewsArticleProps } from '../../../types';
import GlobalContext from '../../../context/GlobalContext';

const toggleFavorite = (article: NewsArticleProps) => {
  const favorites = JSON.parse(localStorage.getItem('favoriteArticles') || '[]');

  const isAlreadyFavorite = favorites.some(
    (favorite: NewsArticleProps) => favorite.id === article.id,
  );

  if (isAlreadyFavorite) {
    const updatedFavorites = favorites.filter(
      (favorite: NewsArticleProps) => favorite.id !== article.id,
    );
    localStorage.setItem('favoriteArticles', JSON.stringify(updatedFavorites));
  } else {
    favorites.push(article);
    localStorage.setItem('favoriteArticles', JSON.stringify(favorites));
  }
};

function ButtonFavoriteNews(props: NewsArticleProps) {
  const { titulo, introducao, data_publicacao, link, id } = props;
  const { toggleFavoriteRender } = useContext(GlobalContext);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favoriteArticles') || '[]');
    const isAlreadyFavorite = favorites.some(
      (favorite: NewsArticleProps) => favorite.id === id,
    );
    setIsFavorite(isAlreadyFavorite);
  }, [id]);

  const handleToggleFavorite = () => {
    toggleFavorite({ id, titulo, introducao, data_publicacao, link });
    setIsFavorite(!isFavorite);
    toggleFavoriteRender();
  };

  return (
    <button onClick={ handleToggleFavorite } className="favorite-news-btn">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="16"
        viewBox="0 0 18 16"
        fill="none"
        className={ isFavorite ? 'favorite-news-icon' : '' }
      >
        <path
          d="M9.04208 15.2731C9.02769 15.2868 9.01366 15.3002 9 15.3132C8.98634 15.3002 8.97231 15.2868 8.95792 15.2731C8.7135 15.0406 8.3639 14.7047 7.94421 14.2923C7.10438 13.467 5.98599 12.3371 4.86883 11.1165C3.74975 9.89388 2.6411 8.59015 1.81524 7.41578C1.40212 6.82831 1.06722 6.28366 0.837382 5.80539C0.602853 5.31736 0.5 4.94343 0.5 4.68445C0.5 3.18863 0.888577 2.17447 1.58973 1.52521C2.29857 0.868839 3.41794 0.5 5.0625 0.5C5.36565 0.5 5.73703 0.619191 6.15213 0.84328C6.56057 1.06377 6.97165 1.36404 7.34375 1.67448C7.71419 1.98354 8.03574 2.29403 8.26509 2.52789C8.37946 2.64452 8.47017 2.74134 8.53177 2.80841C8.56255 2.84192 8.58601 2.86796 8.60147 2.88526L8.61856 2.90449L8.62243 2.90889L8.6231 2.90965L8.62317 2.90973L8.62319 2.90976L8.62324 2.90981L9 3.34202L9.37676 2.90981L9.37681 2.90976L9.37683 2.90973L9.3769 2.90965L9.37757 2.90889L9.38144 2.90449L9.39853 2.88526C9.41399 2.86796 9.43745 2.84192 9.46823 2.80841C9.52983 2.74134 9.62054 2.64452 9.73491 2.52789C9.96426 2.29403 10.2858 1.98354 10.6562 1.67448C11.0283 1.36404 11.4394 1.06377 11.8479 0.84328C12.263 0.619191 12.6344 0.5 12.9375 0.5C14.5821 0.5 15.7015 0.868623 16.4103 1.52487C17.1114 2.17398 17.5 3.18809 17.5 4.68445C17.5 4.94343 17.3971 5.31736 17.1626 5.80539C16.9328 6.28366 16.5979 6.82831 16.1848 7.41578C15.3589 8.59015 14.2503 9.89388 13.1312 11.1165C12.014 12.3371 10.8956 13.467 10.0558 14.2923C9.6361 14.7047 9.2865 15.0406 9.04208 15.2731Z"
          fill="white"
          stroke="black"
        />
      </svg>
    </button>
  );
}

export default ButtonFavoriteNews;
