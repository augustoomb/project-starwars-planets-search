import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';

// import response from '../testData';

function PlanetProvider({ children }) {
  const [data, setData] = useState();

  const fetchPlanets = async () => {
    const apiData = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const jsonData = await apiData.json();
    setData(jsonData.results);
  };

  // const fetchPlanets = async () => {
  //   await setData(response.results);
  // };

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

/* Esse componente está pegando dados mockados.
  para retornar ao normal:
  - apagar a linha de import response
  - apagar o fetch planets menor, que pega os dados mockados
  - descomentar fetch planets original ( que busca da api verdadeira)
*/
