import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { ThemeProvider } from './context/ThemeContext';
import { CounterProvider } from './context/CounterContext';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
 <ThemeProvider>
   <CounterProvider>
    <App />
   </CounterProvider>
  </ThemeProvider>
  </Provider>
);
