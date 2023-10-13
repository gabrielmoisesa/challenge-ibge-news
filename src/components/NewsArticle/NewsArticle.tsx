import './NewsArticle.css';
import { NewsArticleProps } from '../../types';
import formatDateToDaysAgo from '../../utils/formatDateToDaysAgo';
import ButtonNewsLink from '../ButtonNewsLink/ButtonNewsLink';

function NewsArticle(props: NewsArticleProps) {
  const { title, description, date, link } = props;
  const daysAgo = formatDateToDaysAgo(date);

  return (
    <article className="news-article">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="news-footer">
        <p>{daysAgo}</p>
        <ButtonNewsLink link={ link } />
      </div>
    </article>
  );
}

export default NewsArticle;
