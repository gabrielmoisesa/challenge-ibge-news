import './NewsArticle.css';
import { NewsArticleProps } from '../../types';
import formatDateToDaysAgo from '../../utils/formatDateToDaysAgo';
import ButtonNewsLink from '../Buttons/ButtonNewsLink/ButtonNewsLink';
import ButtonFavoriteNews from '../Buttons/ButtonFavoriteNews/ButtonFavoriteNews';

function NewsArticle(props: NewsArticleProps) {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { id, titulo, introducao, data_publicacao, link } = props;
  const daysAgo = formatDateToDaysAgo(data_publicacao);

  return (
    <article className="news-article">
      <div className="news-content-container">
        <div className="news-content">
          <h3>{titulo}</h3>
          <p>{introducao}</p>
        </div>
        <div className="news-footer">
          <p>{daysAgo}</p>
          <ButtonNewsLink link={ link } />
        </div>
      </div>
      <div className="fav-news-btn-container">
        <ButtonFavoriteNews
          id={ id }
          titulo={ titulo }
          introducao={ introducao }
          data_publicacao={ data_publicacao }
          link={ link }
        />
      </div>
    </article>
  );
}

export default NewsArticle;
