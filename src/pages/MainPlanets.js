import React, { useContext, useEffect, useState } from 'react';
import PlanetContext from '../context/PlanetContext';

function MainPlanets() {
  const { fetchPlanets, data } = useContext(PlanetContext); // pegando do contexto
  const [filteredArr, setFilteredArr] = useState([]);
  const arrTableHead = ['name', 'rotation_period', 'orbital_period', 'diameter',
    'climate', 'gravity', 'terrain', 'surface_water', 'population', 'films', 'created',
    'edited', 'url'];

  useEffect(() => {
    async function fetchData() {
      await fetchPlanets();
    }
    fetchData();
    // setLocalPlanets();
  }, [fetchPlanets]); // TODO: confirmar

  const filterList = (searchValue) => {
    // const filtered = data.filter((planet) => planet.name === searchValue);
    const filtered = data.filter((planet) => planet.name.includes(searchValue));
    // console.log(filtered);
    setFilteredArr(filtered);
  };

  const handleChange = (event) => {
    // console.log(event.target.value);
    filterList(event.target.value);
  };

  return (
    <div>
      <h1>Projeto Star Wars</h1>
      <input
        onChange={ handleChange }
        data-testid="name-filter"
      />
      {
        // data && (filteredArr === undefined || filteredArr.length === 0)
        data
          ? (
            <table>
              <tr>
                {
                  arrTableHead.map((itemHead) => (
                    <th key={ itemHead }>{ itemHead }</th>
                  ))
                }
              </tr>
              {
                // data.map((planet) => (
                (filteredArr.length > 0 ? filteredArr : data).map((planet) => (
                  <tr key={ planet.name }>
                    <td>{ planet.name }</td>
                    <td>{ planet.rotation_period }</td>
                    <td>{ planet.orbital_period }</td>
                    <td>{ planet.diameter }</td>
                    <td>{ planet.climate }</td>
                    <td>{ planet.gravity }</td>
                    <td>{ planet.terrain }</td>
                    <td>{ planet.surface_water }</td>
                    <td>{ planet.population }</td>
                    <td>{ planet.films }</td>
                    <td>{ planet.created }</td>
                    <td>{ planet.edited }</td>
                    <td>{ planet.url }</td>
                  </tr>
                ))
              }
            </table>
          )
          : null
      }
    </div>
  );
}

export default MainPlanets;
