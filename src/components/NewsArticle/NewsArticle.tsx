import './NewsArticle.css';
import { NewsArticleProps } from '../../types';
import ButtonNewsLink from '../ButtonNewsLink/ButtonNewsLink';
import ButtonFavoriteNews from '../ButtonFavoriteNews/ButtonFavoriteNews';
import formatDateToDaysAgo from '../../utils/formatDateToDaysAgo';

function NewsArticle(props: NewsArticleProps) {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { id, titulo, introducao, data_publicacao, link } = props;
  const daysAgo = formatDateToDaysAgo(data_publicacao);

  return (
    <article className="news-article">
      <h3>{titulo}</h3>
      <p>{introducao}</p>
      <div className="news-footer">
        <p>{daysAgo}</p>
        <ButtonNewsLink link={ link } />
      </div>
      <ButtonFavoriteNews
        id={ id }
        titulo={ titulo }
        introducao={ introducao }
        data_publicacao={ data_publicacao }
        link={ link }
      />
    </article>
  );
}

export default NewsArticle;
