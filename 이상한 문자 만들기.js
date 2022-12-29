s = "try hello world";
function solution(s) {
  var answer = "";
  // char = [];
  // c = "";
  text = [];
  arr = s.split(" ");
  arr.forEach((word) => {
    c = [];
    char = word.split("");
    char.forEach((char, index) => {
      code = char.charCodeAt(0);
      char =
        code > 90 && index % 2 === 0
          ? String.fromCharCode(code - 32)
          : code <= 90 && index % 2 === 1
          ? String.fromCharCode(code + 32)
          : char;
      c.push(char);
    });

    text.push(c.join(""));
  });

  answer = text.join(" ");
  return answer;
}
console.log(solution(s));
