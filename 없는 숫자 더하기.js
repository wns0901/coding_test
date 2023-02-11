// 0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다. numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.
// [1,2,3,4,6,7,8,0]	14
// [5,8,4,0,6,7,9]	6

numbers = [1, 2, 3, 4, 6, 7, 8, 0];

function solution(numbers) {
  num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  answer = numbers.map((x) => {
    const index = num.indexOf(x);
    num.splice(index, 1);
  });
  console.log(num);
  return num.reduce((i, total) => {
    return i + total;
  }, 0);
}

console.log(solution(numbers));
