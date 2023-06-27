// const board = [
//   [0, 0, 0, 0, 0],
//   [0, 0, 1, 0, 3],
//   [0, 2, 5, 0, 1],
//   [4, 2, 4, 4, 2],
//   [3, 5, 1, 3, 1],
// ];
// const moves = [1, 5, 3, 5, 1, 2, 1, 4];
const board = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];
const moves = [1, 2, 3, 4];

function solution(board, moves) {
  const done = [];
  let answer = 0;
  for (const move of moves) {
    const result = find(0, board, move);
    if (result.found) {
      board[result.hight][move - 1] = 0;
      done.push(result.found);
    }

    if (
      done[done.length - 1] === done[done.length - 2] &&
      done[done.length - 2]
    ) {
      done.pop();
      done.pop();
      answer += 2;
    }
  }
  return answer;
}

function find(hight, board, move) {
  if (hight === board.length) return { hight, found: 0 };
  const found = board[hight][move - 1];
  if (found) return { hight, found };
  return find(hight + 1, board, move);
}

console.log(solution(board, moves));
