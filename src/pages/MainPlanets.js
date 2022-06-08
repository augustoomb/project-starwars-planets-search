import React, { useContext, useEffect, useState } from 'react';
import PlanetContext from '../context/PlanetContext';
import operators from '../util/Operators';

function MainPlanets() {
  const { fetchPlanets, data } = useContext(PlanetContext); // pegando do contexto
  const [filteredArr, setFilteredArr] = useState([]);
  const [filteredNumArr, setFilteredNumArr] = useState([]);
  const arrTableHead = ['name', 'rotation_period', 'orbital_period', 'diameter',
    'climate', 'gravity', 'terrain', 'surface_water', 'population', 'films', 'created',
    'edited', 'url'];

  useEffect(() => {
    async function fetchData() {
      await fetchPlanets();
    }
    fetchData();
  }, []); // TODO: confirmar

  // filtro para o campo de busca por nome
  const filterList = (searchValue) => {
    const filtered = data.filter((planet) => planet.name.includes(searchValue));
    setFilteredArr(filtered);
  };

  // evento para o input do campo de busca por nome
  const handleChange = (event) => {
    filterList(event.target.value);
  };

  // filtro para os campos de filtro numérico
  const numericFilter = (filterColumn, filterOperator, numberParam) => {
    // console.log(filterColumn);
    // console.log(filterOperator);
    // console.log(numberParam);

    // const filtered = data.filter((planet) => eval(operators(planet, filterColumn, filterOperator, numberParam)));
    const filtered = data.filter((planet) => operators(planet, filterColumn, filterOperator, numberParam));

    setFilteredNumArr(filtered);
  };

  // submit para os filtros numéricos
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const filterColumn = event.target.filterColumn.value;
    const filterOperator = event.target.filterOperator.value;
    const numberParam = event.target.numberParam.value;

    numericFilter(filterColumn, filterOperator, numberParam);
  };

  return (
    <div>
      <h1>Projeto Star Wars</h1>
      <input
        onChange={ handleChange }
        data-testid="name-filter"
      />
      <form onSubmit={ handleFormSubmit }>
        <label htmlFor="filterColumn" className="label">
          Coluna:
          <select
            id="filterColumn"
            data-testid="column-filter"
          >
            <option selected value="population">population</option>
            <option value="orbital_period">orbital_period</option>
            <option value="diameter">diameter</option>
            <option value="rotation_period">rotation_period</option>
            <option value="surface_water">surface_water</option>
          </select>
        </label>
        <label htmlFor="filterOperator" className="label">
          Operador:
          <select
            id="filterOperator"
            data-testid="comparison-filter"
          >
            <option selected value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
        </label>
        <input
          id="numberParam"
          data-testid="value-filter"
          type="number"
        />
        <button type="submit" data-testid="button-filter">Filtrar</button>
      </form>
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
                // (filteredArr.length > 0 ? filteredArr : data).map((planet) => (
                (filteredNumArr.length > 0 ? filteredNumArr : filteredArr.length > 0 ? filteredArr : data).map((planet) => (
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
