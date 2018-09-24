module.exports = function solveEquation(equation) {
  const arr = equation.split(' '),
        a = arr[0],
        b = parseInt(arr[3] + arr[4]),
        c = parseInt(arr[7] + arr[8]);

  const discreminant = (b ** 2) - (4 * a * c),
        answer_1 = Math.round((-b + Math.sqrt(discreminant)) / (2 * a)),
        answer_2 = Math.round((-b - Math.sqrt(discreminant)) / (2 * a));

  return [answer_1, answer_2].sort((a, b) => a - b);
}
