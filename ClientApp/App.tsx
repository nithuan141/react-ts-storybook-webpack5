import * as React from 'react';
import * as ReactDOM from 'react-dom';
import MainPage from './components/pages/MainPage';

ReactDOM.render(
  <React.StrictMode>
    <MainPage team="" />
  </React.StrictMode>,
  document.getElementById('root') as HTMLElement,
);
