function solution(absolutes, signs) {
  var answer = 0;
  absolutes.forEach((n, index) => {
    n = signs[index] ? n : n * -1;
    answer += n;
  });
  return answer;
}
