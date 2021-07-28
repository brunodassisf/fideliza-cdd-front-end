import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Routes from './routes/routes';

import theme, { Root } from './theme/global';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Root>
        <Routes />
        <CssBaseline />
      </Root>
    </ThemeProvider>
  );
}

export default App;
