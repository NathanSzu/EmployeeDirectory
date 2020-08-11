import React from 'react';
import './App.css';
import Filter from './components/Filter';
import Header from './components/Header';
import Home from './components/pages/Home';
import Row from './components/Row';

function App() {
  return (
    <div>
      <Header />
      <Filter />
      <Row />
    </div>
  );
}

export default App;
