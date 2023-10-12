import { useContext } from 'react';
import GlobalContext from '../../context/GlobalContext';

function LatestNewsCard() {
  const { data, isPending, error } = useContext(GlobalContext);

  return (
    <article>
      <img src="" alt="" />
    </article>
  );
}

export default LatestNewsCard;
