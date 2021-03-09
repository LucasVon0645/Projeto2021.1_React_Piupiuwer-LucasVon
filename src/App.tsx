import React from 'react';
import Routes from './routes/routes';
import GlobalStyle from './styles/global';

import TokenUserContextProvider from './hooks/TokenUserContextProvider'

function App() {


  return (
    <div className="App">
      <TokenUserContextProvider>
        <GlobalStyle />
        <Routes/>
      </TokenUserContextProvider>
    </div>
  );
}

export default App;
