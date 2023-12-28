//Libs
import React from 'react';
import ReactDOM from 'react-dom/client';

import Rotas from './Rotas/index';

//Css
import './index.css';
// erro de ts2345 é só colocar ali a exclamação depois do parentese do root
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <Rotas />
  </React.StrictMode>
);
