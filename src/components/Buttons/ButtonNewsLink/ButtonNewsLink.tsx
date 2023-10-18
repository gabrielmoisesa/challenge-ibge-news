import './ButtonNewsLink.css';

function ButtonNewsLink(props: { link: string }) {
  const { link } = props;

  return (
    <a href={ link } target="_blank" rel="noreferrer">
      <button className="news-link-btn">Leia a notícia aqui</button>
    </a>
  );
}

export default ButtonNewsLink;
