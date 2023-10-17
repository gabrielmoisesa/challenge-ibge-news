import './LatestNewsArticle.css';
import { useContext } from 'react';
import GlobalContext from '../../context/GlobalContext';
import formatDateToDaysAgo from '../../utils/formatDateToDaysAgo';
import ButtonNewsLink from '../ButtonNewsLink/ButtonNewsLink';
import ButtonFavoriteNews from '../ButtonFavoriteNews/ButtonFavoriteNews';

function LatestNewsArticle() {
  const { data, isPending, error } = useContext(GlobalContext);

  if (isPending) return <p>Carregando...</p>;
  if (error) return <p>{JSON.stringify(error)}</p>;
  if (!data || !data.items || data.items.length === 0) {
    return <p>Não há dados disponíveis</p>;
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { id, titulo, introducao, data_publicacao, link } = data.items[0];
  const daysAgo = formatDateToDaysAgo(data_publicacao);

  return (
    <article className="latest-news-article">
      <img src={ data.imageIntro } alt="" />
      <div className="latest-news-info">
        <div className="top-container">
          <p>Notícia mais recente</p>
          <ButtonFavoriteNews
            id={ id }
            titulo={ titulo }
            introducao={ introducao }
            data_publicacao={ data_publicacao }
            link={ link }
          />
        </div>
        <h2>{titulo}</h2>
        <p className="latest-news-introduction">{introducao}</p>
        <div className="latest-news-footer">
          <p>{daysAgo}</p>
          <ButtonNewsLink link={ link } />
        </div>
      </div>
    </article>
  );
}

export default LatestNewsArticle;