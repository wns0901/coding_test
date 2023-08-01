const s = "wxyz";
const skip = "abcdefghij";
const index = 20;

function solution(s, skip, index) {
  let result = "";
  let code = 0;
  for (let i = 0; i < s.length; i++) {
    let char = "";
    let length = index;
    for (let j = 1; j <= length; j++) {
      code = s.charCodeAt(i) + j;
      if (code > 148) code -= 52;
      if (code > 122) code -= 26;
      char = String.fromCharCode(code);
      if (skip.indexOf(char) >= 0) length++;
    }
    result += char;
  }

  return result;
}

console.log(solution(s, skip, index));
