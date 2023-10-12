import { useContext } from 'react';
import GlobalContext from '../../context/GlobalContext';
import formatDateToDaysAgo from '../../utils/formatDateToDaysAgo';

function LatestNewsCard() {
  const { data, isPending, error } = useContext(GlobalContext);
  const { titulo, introducao, data_publicacao, link } = data.items[0];
  const daysAgo = formatDateToDaysAgo(data_publicacao);

  return (
    <article>
      <img src={ data.imageIntro } alt="" />
      <div>
        <p>Notícia mais recente</p>
        <h2>{titulo}</h2>
        <p>{introducao}</p>
        <p>{daysAgo}</p>
      </div>
    </article>
  );
}

export default LatestNewsCard;
