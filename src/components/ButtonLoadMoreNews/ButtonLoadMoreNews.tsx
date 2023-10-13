import { useContext, useState } from 'react';
import GlobalContext from '../../context/GlobalContext';

function ButtonLoadMoreNews() {
  const { loadMoreNews, newsQtd } = useContext(GlobalContext);
  const [isQtdMax, setIsQtdMax] = useState(false);

  const handleClick = () => (newsQtd < 50
    ? loadMoreNews(newsQtd + 9)
    : setIsQtdMax(true));

  return (
    <button onClick={ handleClick }>
      MAIS NOTÍCIAS
    </button>
  );
}

export default ButtonLoadMoreNews;
