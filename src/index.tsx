import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

import './styles/index.scss';
import { CurrentProvider } from './context/provider/CurrentProvider';
import { store } from './store/store';
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* данный провайдер для redux-toolkit */}
    <Provider store={store}>
      <BrowserRouter>
        {/* данный провайдер для ThemeContext */}
        <CurrentProvider>
          <App />
        </CurrentProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
