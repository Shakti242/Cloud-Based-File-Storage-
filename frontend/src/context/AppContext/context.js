import { createContext } from 'react';

export const AppContext = createContext({
  buttonRoute: '',
  buttonTitle: '',
  setAppContext: () => {
    throw new Error('setHeader function must be overridden');
  }
});
