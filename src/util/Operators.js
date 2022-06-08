// const operators = (planet, filterColumn, filterOperator, numberParam) => {
//   if (filterOperator === 'maior que') {
//     return 'planet[filterColumn] > numberParam';
//   }

//   if (filterOperator === 'menor que') {
//     return 'planet[filterColumn] < numberParam';
//   }

//   return 'planet[filterColumn] === numberParam';
// };

// export default operators;

const operators = (planet, filterColumn, filterOperator, numberParam) => {
  if (filterOperator === 'maior que') {
    return parseInt(planet[filterColumn], 10) > parseInt(numberParam, 10);
  }

  if (filterOperator === 'menor que') {
    return parseInt(planet[filterColumn], 10) < parseInt(numberParam, 10);
  }

  return parseInt(planet[filterColumn], 10) === parseInt(numberParam, 10);
};

export default operators;
