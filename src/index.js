import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyled from './style/GlobalStyled';


ReactDOM.render(
  <React.StrictMode>
    <GlobalStyled/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

