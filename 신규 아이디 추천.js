new_id = [
  "...!@BaT#*..y.abcdefghijklm",
  "z-+.^.",
  "=.=",
  "123_.def",
  "abcdefghijklmn.p",
];
function solution(new_id) {
  var answer = "";
  let id = new_id.toLowerCase();
  let reg = /[^a-z0-9-_.]/gm;
  id = id.replace(reg, "");
  reg = /[.]+/gm;
  id = id.replace(reg, ".");

  return id;
}
console.log(solution(new_id[0]));
