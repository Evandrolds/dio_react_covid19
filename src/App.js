import React from 'react';
import  {StylesProvider}  from '@material-ui/styles';
import  {CssBaseline}  from '@material-ui/core';
import GlobalStyle from './utilitiesStyles/styles/global-Styles';
import Main from './views/Main';

function App() {
  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <GlobalStyle />
      <Main />
    </StylesProvider>
  );
}

export default App;
