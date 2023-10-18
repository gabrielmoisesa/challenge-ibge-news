import { useContext, useState } from 'react';
import GlobalContext from '../../../context/GlobalContext';
import './ButtonLoadMoreNews.css';

function ButtonLoadMoreNews() {
  const { loadMoreNews, newsQtd, maxNewsQtd } = useContext(GlobalContext);
  const [isQtdMax, setIsQtdMax] = useState(false);

  const handleClick = () => (newsQtd < maxNewsQtd
    ? loadMoreNews(newsQtd + 9)
    : setIsQtdMax(true));

  if (isQtdMax || newsQtd > maxNewsQtd) return null;

  return (
    <button onClick={ handleClick } className="load-news-button">
      MAIS NOTÍCIAS
    </button>
  );
}

export default ButtonLoadMoreNews;
