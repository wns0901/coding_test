function solution(a, b) {
  var answer = 0;
  let min, max;
  if (a < b) {
    min = a;
    max = b;
  } else {
    min = b;
    max = a;
  }
  if (a === b) {
    answer = a;
  } else {
    while (min <= max) {
      answer += min;
      min++;
    }
  }

  return answer;
}
