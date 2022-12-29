solution(4);
function solution(n) {
  var answer = "";
  for (let i = 1; i <= n; i++) {
    i % 2 === 0 ? (answer += "박") : (answer += "수");
  }
  console.log(answer);
  return answer;
}
