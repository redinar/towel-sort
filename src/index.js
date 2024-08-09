
module.exports = function towelSort (matrix) {
  let resultArray = [];
  if (matrix === undefined) return resultArray;
  for (let i = 1; i < matrix.length; i += 2) {
    matrix[i].sort( (b, a) => a - b);
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      resultArray.push(matrix[i][j]);
    }
  }
  return resultArray;
}
