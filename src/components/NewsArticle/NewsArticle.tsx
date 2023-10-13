import { NewsArticleProps } from '../../types';
import formatDateToDaysAgo from '../../utils/formatDateToDaysAgo';
import ButtonNewsLink from '../ButtonNewsLink/ButtonNewsLink';

function NewsArticle(props: NewsArticleProps) {
  const { title, description, date, link } = props;
  const daysAgo = formatDateToDaysAgo(date);

  return (
    <article>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{daysAgo}</p>
      <ButtonNewsLink link={ link } />
    </article>
  );
}

export default NewsArticle;
