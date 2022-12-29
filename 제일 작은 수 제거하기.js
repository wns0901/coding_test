arr = [4, 3, 2, 1];
function solution(arr) {
  var answer = [];
  num = [arr[0], 0];

  arr.forEach((n, index) => {
    if (n < num[0]) {
      num[0] = n;
      num[1] = index;
    }
  });

  arr.splice(num[1], 1);
  answer = arr;
  arr.length <= 1 ? (answer = [-1]) : false;

  return answer;
}

console.log(solution(arr));
