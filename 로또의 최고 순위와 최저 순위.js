lottos = [44, 1, 10, 0, 31, 25];
win_nums = [31, 10, 45, 1, 6, 19];
// lottos = [0, 0, 0, 0, 0, 0];
// win_nums = [38, 19, 20, 40, 15, 25];
// lottos = [45, 4, 35, 20, 3, 9];
// win_nums = [20, 9, 3, 45, 4, 35];

function solution(lottos, win_nums) {
  var answer = [];
  n = 0;
  lottos.forEach((num) => {
    win_nums.forEach((win) => {
      if (num === win) n++;
    });
  });
  zero = lottos.filter((n) => n === 0).length;
  switch (n) {
    case 1:
      answer = [6 - zero, 6];
      break;
    case 2:
      answer = [5 - zero, 5];
      break;
    case 3:
      answer = [4 - zero, 4];
      break;
    case 4:
      answer = [3 - zero, 3];
      break;
    case 5:
      answer = [2 - zero, 2];
      break;
    case 6:
      answer = [1, 1];
      break;
    default:
      if (lottos.includes(0)) {
        answer = [1, 6];
      } else {
        answer = [6, 6];
      }
      break;
  }
  return answer;
}
function zeroCheck(lottos) {}

console.log(solution(lottos, win_nums));
