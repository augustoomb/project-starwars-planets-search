import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';

function PlanetProvider({ children }) {
  const [data, setData] = useState();

  const fetchPlanets = async () => {
    const apiData = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const jsonData = await apiData.json();
    setData(jsonData.results);
  };

  return (
    <PlanetContext.Provider value={ { fetchPlanets, data } }>
      { children }
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetProvider;
