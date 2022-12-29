s = "Zbcdefg";
console.log(solution(s));
function solution(s) {
  var answer = "";
  arr = Array.from(s);
  arr.sort((a, b) => {
    if (a < b) return 1;
    if (a > b) return -1;
    if (a === b) return 0;
  });
  answer = arr.join("");
  return answer;
}
