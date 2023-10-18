import { useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import { ChildrenProviderProps } from '../types';
import GlobalContext from './GlobalContext';

function GlobalProvider({ children }: ChildrenProviderProps) {
  const [newsQtd, setNewsQtd] = useState(10);
  const [favoriteRender, setFavoriteRender] = useState(false);
  const { data, isPending, error } = useFetch(`https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=${newsQtd}`);

  const loadMoreNews = (qtd: number) => setNewsQtd(qtd);
  const toggleFavoriteRender = () => setFavoriteRender(!favoriteRender);
  console.log(favoriteRender);

  const contextValue = {
    data,
    isPending,
    error,
    newsQtd,
    loadMoreNews,
    toggleFavoriteRender,
    favoriteRender,
  };

  return (
    <GlobalContext.Provider value={ contextValue }>
      { children }
    </GlobalContext.Provider>
  );
}

export default GlobalProvider;
