function solution(s) {
  const check = s.match(/[0-9]/g) ? s.match(/[0-9]/g).length : 0;

  return check === s.length && (s.length === 4 || s.length === 6)
    ? true
    : false;
}
console.log(solution("aaaa"));
