import { useContext } from 'react';
import GlobalContext from '../../context/GlobalContext';

function ButtonLoadMoreNews() {
  const { loadMoreNews } = useContext(GlobalContext);

  return (
    <button>
      MAIS NOTÍCIAS
    </button>
  );
}

export default ButtonLoadMoreNews;
