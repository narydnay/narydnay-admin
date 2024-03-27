import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { StoreContext } from 'storeon/react'
import { store } from './store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
console.log(process.env)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <StoreContext.Provider value={store} >
      <App />
    </StoreContext.Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
