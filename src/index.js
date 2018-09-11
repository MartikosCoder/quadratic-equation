module.exports = function solveEquation(equation) {
  let arr = equation.split(' ');

  let a = arr[0];
  let b = parseInt(arr[3] + arr[4]);
  let c = parseInt(arr[7] + arr[8]);

  let discreminant = (b * b) - (4 * a * c);

  let answer_1 = Math.round(((b - 2 * b) + Math.sqrt(discreminant)) / (2 * a));
  let answer_2 = Math.round(((b - 2 * b) - Math.sqrt(discreminant)) / (2 * a));
  let result = [answer_1, answer_2];

  result.sort((a, b) => a - b);
  return result;
}
