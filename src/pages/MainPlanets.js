import React, { useContext, useEffect } from 'react';
import PlanetContext from '../context/PlanetContext';

function MainPlanets() {
  const { fetchPlanets, data } = useContext(PlanetContext);
  const arrTableHead = ['name', 'rotation_period', 'orbital_period', 'diameter',
    'climate', 'gravity', 'terrain', 'surface_water', 'population', 'films', 'created',
    'edited', 'url'];

  // useEffect(async () => {
  //   await fetchPlanets();
  // }, []);

  useEffect(() => {
    async function fetchData() {
      await fetchPlanets();
    }
    fetchData();
  }, [fetchPlanets]); // confirmar

  /*

  useEffect(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

  */

  return (
    <div>
      <h1>Projeto Star Wars</h1>
      {
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
                data.map((planet) => (
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
