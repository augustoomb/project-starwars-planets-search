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
    return parseInt(planet[filterColumn]) > parseInt(numberParam);
  }

  if (filterOperator === 'menor que') {
    return parseInt(planet[filterColumn]) < parseInt(numberParam);
  }

  return parseInt(planet[filterColumn]) === parseInt(numberParam);
};

export default operators;
