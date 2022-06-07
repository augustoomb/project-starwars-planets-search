import React from 'react';
import './App.css';
import PlanetProvider from './context/PlanetProvider';
import MainPlanets from './pages/MainPlanets';

function App() {
  return (
    // <span>Hello, App!</span>
    <PlanetProvider>
      <MainPlanets />
    </PlanetProvider>
  );
}

export default App;
