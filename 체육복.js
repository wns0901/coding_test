// n	lost	reserve	return
// 5	[2, 4] [1, 3, 5]	5
// 5	[2, 4]	[3]	      4
// 3	[3]	    [1]	      2

const n = 5;
const lost = [1, 2];
const reserve = [2, 3];

function solution(n, lost, reserve) {
  lost.sort();
  reserve.sort();
  for (let i = 0; i < reserve.length; i++) {
    for (let j = 0; j < lost.length; j++) {
      if (reserve[i] === lost[j]) {
        delete reserve[i];
        delete lost[j];
        break;
      }
    }
  }
  lost = lost.filter((x) => x > 0);
  reserve = reserve.filter((x) => x > 0);

  for (let i = 0; i < reserve.length; i++) {
    for (let j = 0; j < lost.length; j++) {
      if (reserve[i] - 1 === lost[j] || reserve[i] + 1 === lost[j]) {
        delete reserve[i];
        delete lost[j];
        break;
      }
    }
  }

  lost = lost.filter((x) => x > 0);

  return n - lost.length;
}

console.log(solution(n, lost, reserve));
