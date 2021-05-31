import React from 'react';
import MainRouter from './components/router/MainRouter';
import { UserContextProvider } from './contexts/UserContext';

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <MainRouter />
      </UserContextProvider>
    </div>
  );
}

export default App;
