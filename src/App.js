import React from 'react';
import { HashRouter } from 'react-router-dom';

import './App.css';
import Header from './Components/Header/Header';
import routes from './routes';

function App() {
  return (
    <HashRouter>
      <Header />
      <main className='main'>
        {routes}
      </main>
    </HashRouter>
  );
}

export default App;
