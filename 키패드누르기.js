// [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5]	"right"	"LRLLLRLLRRL"
// [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2]	"left"	"LRLLRRLLLRR"
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]	"right"	"LLRLLRLLRL"

function solution(numbers, hand) {
  const left = {
    1: [1, 1],
    4: [1, 2],
    7: [1, 3],
  };
  const right = {
    3: [3, 1],
    6: [3, 2],
    9: [3, 3],
  };
  const midle = {
    2: [2, 1],
    5: [2, 2],
    8: [2, 3],
    0: [2, 4],
  };
  const position = {
    left: [1, 4],
    right: [3, 4],
  };
  const answer = numbers.map((num, i) => {
    if (num in left) {
      position.left = left[num];
      return "L";
    } else if (num in right) {
      position.right = right[num];
      return "R";
    } else {
      if (
        Math.abs(position.right[0] - midle[num][0]) +
          Math.abs(position.right[1] - midle[num][1]) ===
        Math.abs(position.left[0] - midle[num][0]) +
          Math.abs(position.left[1] - midle[num][1])
      ) {
        if (hand === "right") {
          position.right = midle[num];
          return "R";
        }
        position.left = midle[num];
        return "L";
      } else if (
        Math.abs(position.right[0] - midle[num][0]) +
          Math.abs(position.right[1] - midle[num][1]) >
        Math.abs(position.left[0] - midle[num][0]) +
          Math.abs(position.left[1] - midle[num][1])
      ) {
        position.left = midle[num];
        return "L";
      } else {
        position.right = midle[num];
        return "R";
      }
    }
  });
  return answer.join("");
}

const numbers = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];
const hand = "right";

console.log(solution(numbers, hand));
