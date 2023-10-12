function ButtonNewsLink(props: { link: string }) {
  const { link } = props;

  return (
    <a href={ link }>
      <button>Leia a notícia aqui</button>
    </a>
  );
}

export default ButtonNewsLink;
