import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '$redux-toolkit/store';
import { ThemeProvider } from '@material-ui/core';
import theme from '$theme';
import App from '$components/App';
import './common/axios';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
