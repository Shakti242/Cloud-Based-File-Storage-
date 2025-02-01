import './App.css';
import Routes from './routes';
import { AppContextProvider } from './context';
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
Amplify.configure(awsExports);

function App({ signOut, user }) {
  return (
    <div className="App">
      <AppContextProvider>
        <Routes signOut={signOut} user={user} />
      </AppContextProvider>
    </div>
  );
}

export default withAuthenticator(App);
