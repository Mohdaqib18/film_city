
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import App from './components/App';
import {Provider}  from 'react-redux'
import store from './app/store'
import "./index.css"
import ToggleColorModeProvider from "./utils/ToggleColorMode";





ReactDOM.render(
 <Provider store={store}> 
 <ToggleColorModeProvider >
    <Router>
      <App />
    </Router>
  </ToggleColorModeProvider>
  </Provider>,
  document.getElementById('root'),
);

