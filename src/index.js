import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Pulsante from "./Button.jsx"
import Imagecontenent from './Imagecomponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <>
   <Pulsante frase1="ciao" frase2="ok"/>
   <Imagecontenent foto1="https://m.media-amazon.com/images/I/61u8vpsPpXL._AC_SX679_.jpg" foto2="https://m.media-amazon.com/images/I/61meUw6spNL._AC_SX679_.jpg" descrizione1="cellulari xiaomi" descrizione2="cellulare redmi verde"/>
</>
   );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

