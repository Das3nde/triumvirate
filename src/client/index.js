import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Countdown from './countdown/component';
import RandomQuote from './random-quote/component';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#484848',
      main: '#212121',
      dark: '#000000',
      contrastText: '#ffffff'
    }
  }
});

ReactDOM.render(
  <React.Fragment>
    <CssBaseline>
      <MuiThemeProvider theme={theme}>
        <div align="center">
          <Typography>
            <h1>
              Triumvirate Countdown
            </h1>
            <Typography variant="subheading">
              Yes!
            </Typography>
            <p>
              <em>
                <RandomQuote />
              </em>
            </p>
          </Typography>
        </div>
      </MuiThemeProvider>
    </CssBaseline>
  </React.Fragment>,
  document.getElementById('root')
);
