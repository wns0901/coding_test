function solution(n, w, num) {
  const columns = w;
  const rows = Math.ceil(n / w);

  const arr = Array.from({ length: rows }, () => Array(columns).fill(0));
  
  const totalCells = rows * columns;

  for (let i = 0; i < totalCells; i++) {
    const row = Math.floor(i / columns);
    const column = row % 2 === 0 ? i % columns : columns - 1 - (i % columns);
    const cell = i >= n ? 0 : i + 1;
    
    arr[row][column] = cell;
  }
  
  const reversedArr = arr.reverse();

  console.log(reversedArr);
  
  let answer = 0;
  let targetColumn = 0;

  for (let i = 0; i < reversedArr.length; i++) {
    targetColumn = reversedArr[i].indexOf(num);
    if (targetColumn === -1) continue;
    answer = i + 1;
    break;
  }
  
  answer -= reversedArr[0][targetColumn] === 0 ? 1 : 0;

  return answer;
}

// 1. n = 22, w = 6, num = 8
let n = 22;
let w = 6;
let num = 8;
let result = 3;
let answer = solution(n, w, num);

console.log("1번: " + (answer === result ? "정답" : "오답"));
console.log("출력: " + answer);
console.log("답: " + result);

console.log("=========================");


// 2. n = 13, w = 3, num = 6 
n = 13;
w = 3;
num = 6;
result = 4;
answer = solution(n, w, num);
console.log("2번: " + (answer === result ? "정답" : "오답"));
console.log("출력: " + answer);
console.log("답: " + result);

console.log("=========================");

const solution = (n, w, num) => {
    let res = 1
    const total = Math.ceil(n / w)
    const target = Math.ceil(num / w)
    const nRemain = n % w || n
    const numRemain = num % w || num
    if (total % 2 === target % 2 && nRemain < numRemain) res -= 1 
    if (total % 2 !== target % 2 && nRemain + numRemain <= w) res -= 1
    return total - target + res
}