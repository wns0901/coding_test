// const today = "2022.05.19";
const today = "2020.05.28";
// const terms = ["A 6", "B 12", "C 3"];
const terms = ["A 3", "B 12"];
// const privacies = [
//   "2021.05.02 A",
//   "2021.07.01 B",
//   "2022.02.19 C",
//   "2022.02.20 C",
// ];
const privacies = ["2020.01.28 A", "2019.05.28 B", "2019.05.28 B"];

function solution(today, terms, privacies) {
  const answer = [];
  today = today.split(".");
  for (let i = 0; i < today.length; i++) {
    today[i] = Number(today[i]);
  }
  const term = {};

  for (const x of terms) {
    const y = x.split(" ");
    term[y[0]] = Number(y[1]);
  }

  const result = privacies.filter((privacy) => {
    privacy = privacy.split(" ");
    const iTerm = term[privacy[1]];
    const day = privacy[0].split(".");
    for (let i = 0; i < day.length; i++) {
      day[i] = Number(day[i]);
    }
    day[1] = day[1] + iTerm;
    if (day[1] > 12) {
      day[0] += Math.floor(day[1] / 12) - (day[1] % 12 ? 0 : 1);
      day[1] = day[1] % 12 ? day[1] % 12 : 12;
    }
    if (day[0] < today[0]) return true;
    if (day[0] === today[0] && day[1] < today[1]) return true;
    if (day[0] === today[0] && day[1] === today[1] && day[2] <= today[2])
      return true;
  });
  for (const i of result) {
    const x = privacies.indexOf(i);
    if (x >= 0) {
      answer.push(x + 1);
      privacies[x] = 0;
    }
  }
  return answer;
}

console.log(solution(today, terms, privacies));
