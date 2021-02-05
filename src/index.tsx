import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import {MuiThemeProvider, CssBaseline} from "@material-ui/core";
import {Provider} from "react-redux";
import './index.css';

import App from './App';
import {theme} from "./theme";
import {store} from "./store/store";



ReactDOM.render(
  <React.StrictMode>
      <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Router>
              <Provider store={store}>
                  <App />
              </Provider>
          </Router>
      </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

