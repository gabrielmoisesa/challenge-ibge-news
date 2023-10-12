import { useContext } from 'react';
import GlobalContext from '../../context/GlobalContext';
import formatDateToDaysAgo from '../../utils/formatDateToDaysAgo';
import ButtonNewsLink from '../ButtonNewsLink/ButtonNewsLink';

function LatestNewsCard() {
  const { data, isPending, error } = useContext(GlobalContext);

  if (isPending) return <p>Carregando...</p>;
  if (error) return <p>{JSON.stringify(error)}</p>;
  if (!data || !data.items || data.items.length === 0) {
    return <p>Não há dados disponíveis</p>;
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { titulo, introducao, data_publicacao, link } = data.items[0];
  const daysAgo = formatDateToDaysAgo(data_publicacao);

  return (
    <article>
      <img src={ data.imageIntro } alt="" />
      <div>
        <p>Notícia mais recente</p>
        <h2>{titulo}</h2>
        <p>{introducao}</p>
        <div>
          <p>{daysAgo}</p>
          <ButtonNewsLink link={ link } />
        </div>
      </div>
    </article>
  );
}

export default LatestNewsCard;
