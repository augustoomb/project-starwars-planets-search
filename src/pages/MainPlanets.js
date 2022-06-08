import React, { useContext, useEffect, useState } from 'react';
import PlanetContext from '../context/PlanetContext';
import operators from '../util/Operators';

function MainPlanets() {
  const { fetchPlanets, data } = useContext(PlanetContext); // pegando do contexto
  const [columnFilter, setColumnFilter] = useState('population');
  const [operatorFilter, setOperatorFilter] = useState('maior que');
  const [numberParam, setnumberParam] = useState(0);
  const [filteredArr, setFilteredArr] = useState([]);
  // const [filteredNumArr, setFilteredNumArr] = useState([]);
  const arrTableHead = ['name', 'rotation_period', 'orbital_period', 'diameter',
    'climate', 'gravity', 'terrain', 'surface_water', 'population', 'films', 'created',
    'edited', 'url'];

  useEffect(() => {
    async function fetchData() {
      await fetchPlanets();
    }
    fetchData();
  }, [fetchPlanets]); // TODO: confirmar //fetchPlanets

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
  const numericFilter = () => {
    // const filtered = data.filter((planet) => eval(operators(planet, filterColumn, filterOperator, numberParam)));
    const filtered = data.filter(
      (planet) => operators(planet, columnFilter, operatorFilter, numberParam),
    );

    // setFilteredNumArr(filtered);
    setFilteredArr(filtered);
  };

  // submit para os filtros numéricos
  const handleFormChange = (event) => {
    // event.preventDefault();
    // const filterColumn = event.target.filterColumn.value;
    // const filterOperator = event.target.filterOperator.value;
    // const numberParam = event.target.numberParam.value;

    // numericFilter(filterColumn, filterOperator, numberParam);
    if (event.target.name === 'columnFilter') {
      setColumnFilter(event.target.value);
    }
    if (event.target.name === 'operatorFilter') {
      setOperatorFilter(event.target.value);
    }
    if (event.target.name === 'numberParam') {
      setnumberParam(event.target.value);
    }
  };

  return (
    <div>
      <h1>Projeto Star Wars</h1>
      <input
        onChange={ handleChange }
        data-testid="name-filter"
      />
      <form>
        <label htmlFor="columnFilter" className="label">
          Coluna:
          <select
            name="columnFilter"
            data-testid="column-filter"
            onChange={ handleFormChange }
            value={ columnFilter }
          >
            <option selected value="population">population</option>
            <option value="orbital_period">orbital_period</option>
            <option value="diameter">diameter</option>
            <option value="rotation_period">rotation_period</option>
            <option value="surface_water">surface_water</option>
          </select>
        </label>
        <label htmlFor="operatorFilter" className="label">
          Operador:
          <select
            name="operatorFilter"
            data-testid="comparison-filter"
            onChange={ handleFormChange }
            value={ operatorFilter }
          >
            <option selected value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
        </label>
        <input
          name="numberParam"
          data-testid="value-filter"
          onChange={ handleFormChange }
          type="number"
          value={ numberParam }
        />
        <button type="button" data-testid="button-filter" onClick={ numericFilter }>
          Filtrar
        </button>
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
                // (filteredNumArr.length > 0 ? filteredNumArr : filteredArr.length > 0 ? filteredArr : data).map((planet) => (
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
