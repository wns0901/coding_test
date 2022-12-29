numbers = [2, 1, 3, 4, 1];
function solution(numbers) {
  var answer = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      answer.push(numbers[i] + numbers[j]);
    }
  }
  answer.sort(function (a, b) {
    return a - b;
  });
  set = new Set(answer);
  answer = [...set];
  return answer;
}
console.log(solution(numbers));
