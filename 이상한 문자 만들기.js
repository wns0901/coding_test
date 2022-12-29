s = "try hello world";
function solution(s) {
  var answer = "";
  char = [];
  c = "";
  text = [];
  arr = s.split(" ");
  arr.forEach((word) => {
    // console.log(word);
    char = word.split("");
    char.forEach((char, index) => {
      c = "";
      char =
        char > 90 && index % 2 === 0
          ? char - 32
          : char <= 90 && index === 1
          ? char + 32
          : char;
      console.log(char - 32);
      c += char;
    });
    text.push(c);
  });

  answer = text.join(" ");
  return answer;
}
console.log(solution(s));
