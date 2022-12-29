array = [1, 5, 2, 6, 3, 7, 4];
commands = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];
console.log("정답 :", solution(array, commands));
function solution(array, commands) {
  var answer = [];
  commands.forEach((commands) => {
    arr = array.slice(commands[0] - 1, commands[1]);
    arr.sort((a, b) => {
      return a - b;
    });
    answer.push(arr[commands[2] - 1]);
  });
  return answer;
}
