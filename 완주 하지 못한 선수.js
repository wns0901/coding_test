participant = ["mislav", "stanko", "mislav", "ana"];
completion = ["stanko", "ana", "mislav"];
function solution(participant, completion) {
  let answer = "";

  participant.sort();
  completion.sort();

  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      answer = participant[i];
      break;
    }
  }

  return answer;
}
console.log(solution(participant, completion));
