import { createContext } from 'react';
import { GlobalContextType } from '../types';

const GlobalContext = createContext({} as GlobalContextType);

export default GlobalContext;
