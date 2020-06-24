import React from 'react';
import Routes from './routes';

import Header from './components/Header';
import Hamburguer from './components/Hambur_Slices';
import Footer from './components/Footer';
import Social from './components/Social_Media';
import api from './services/api';

import './styles.css'

const App = () => (
  <div className="App">
    <div className="wrapper">
      <div className="sidebar">
        <Header />
        <Hamburguer />
        <Social />
      </div>
    </div>
    <div className="page-content">
      <Routes />
    </div>
    <Footer />
  </div>
);

export default App;
