import { useFetch } from '../hooks/useFetch';
import { ChildrenProviderProps } from '../types';
import GlobalContext from './GlobalContext';

function GlobalProvider({ children }: ChildrenProviderProps) {
  const { data } = useFetch('https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=10');

  return (
    <GlobalContext.Provider value={ { data } }>
      { children }
    </GlobalContext.Provider>
  );
}

export default GlobalProvider;
