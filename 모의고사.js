// answers	return
// [1,2,3,4,5]	[1]
// [1,3,2,4,2]	[1,2,3]

const answers = [1, 2, 3, 4, 5];

function solution(answers) {
  const student = [[], [], []];
  let student1 = [1, 3, 4, 5];
  let student2 = [3, 1, 2, 4, 5];
  const score = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    const a = Math.floor(i / 2) % 4;
    student[0].push((i + 1) % 5 ? (i + 1) % 5 : 5);
    if (answers[i] === student[0][i]) score[0] += 1;
    student[1].push(i % 2 ? student1[a ? a : 0] : 2);
    if (answers[i] === student[1][i]) score[1] += 1;
    student[2].push(
      i % 2
        ? student2[i ? (Math.ceil(i / 2) - 1) % 5 : 0]
        : student2[Math.floor(i / 2) % 5]
    );
    if (answers[i] === student[2][i]) score[2] += 1;
  }

  let high = 0;

  score.forEach((element, i) => {
    if (element > high) {
      high = element;
    }
  });

  let result = score.map((x, i) => {
    if (x === high) return i + 1;
  });
  result = result.filter((x) => x);

  return result;
}

console.log(solution(answers));
