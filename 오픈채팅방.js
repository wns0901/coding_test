const record = [
  "Enter uid1234 Muzi",
  "Change uid1234 나갈사람",
  "Enter uid4567 Prodo",
  "Leave uid1234",
  "Enter uid1234 Prodo",
  "Leave uid4567",
  "Leave uid1234",
  "Enter uid1234 또옴",
  "Enter uid4567 다시옴",
  "Change uid4567 Ryan",
  "Change uid1234 R",
  "Leave uid1234",
  // "Leave uid4567",
];
solution(record);
function solution(record) {
  user = {};
  record.forEach((list) => {
    array = list.split(" ");
    if (array[0] === "Enter" || array[0] === "Change") {
      user[array[1]] = array[2];
    }
  });

  answer = record
    .map((list) => {
      array = list.split(" ");

      return array[0] === "Enter"
        ? `${user[array[1]]}님이 들어왔습니다.`
        : array[0] === "Leave"
        ? `${user[array[1]]}님이 나갔습니다.`
        : null;
    })
    .filter((data) => data != null);
  console.log(answer);
  return answer;
}
