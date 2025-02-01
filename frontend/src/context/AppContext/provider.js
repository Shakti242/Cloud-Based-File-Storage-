import { useState } from 'react';
import { AppContext } from './context';

export const AppContextProvider = ({ children }) => {
  const [appState, setAppState] = useState({
    buttonRoute: '',
    buttonTitle: ''
  });

  const value = {
    buttonRoute: appState.buttonRoute,
    buttonTitle: appState.buttonTitle,
    setAppContext: (newState) => {
      setAppState((prevState) => ({ ...prevState, ...newState }));
    }
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
