import React from 'react';
import Main from './Components/Main/Main'
import { BrowserRouter } from 'react-router-dom';
import s from "./index.module.css";


const App = () => {

  return (
    <BrowserRouter>
      <div className={s.container}>
        <Main />
      </div>
    </BrowserRouter>
  );
};

export default App;
