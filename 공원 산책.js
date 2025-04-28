/*
길 -> O 장애물 -> X 직사각형 격자 스타트 지점 -> S
["방향 거리"] - ["E 5"]
수행 전 확인 사항 --> 해당하면 명령 무시
  - 이동할  시 공원을 벗어나는 지
  - 이동 시 장애물을 만나는 지
모든 이동 후 [세로 좌표, 가로 좌표] 반환
SOXXO
OOOXO
OXOOO
XOOOO
*/
// const park = ["SOO", "OOO", "OOO"];
const park = ["SOO", "OXX", "OOO"];
// const routes = ["E 2", "S 2", "W 1"];
const routes = ["E 2", "S 2", "W 1"];

function solution(park, routes) {
  const position = (function () {
    for (let index = 0; index < park.length; index++) {
      const element = park[index];
      if (element.indexOf("S") >= 0) return [index, element.indexOf("S")];
    }
  })();
  const hLength = park.length;
  const wLength = park[0].length;
  for (const route of routes) {
    const direction = route[0];
    const distance = route[2];
    const move = distance * (direction === "E" || direction === "S" ? 1 : -1);
    s: switch (direction) {
      case "E":
      case "W":
        let pw = position[1];
        if (position[1] + move >= wLength || position[1] + move < 0) break;
        while (1) {
          if (park[position[0]][pw] === "X") {
            break s;
          }
          if (pw === position[1] + move) {
            break;
          }
          move > 0 ? pw++ : pw--;
        }
        position[1] += move;
        break;
      case "S":
      case "N":
        let ph = position[0];
        if (position[0] + move >= hLength || position[0] + move < 0) break;
        while (1) {
          if (park[ph][position[1]] === "X") {
            break s;
          }
          if (ph === position[0] + move) {
            break;
          }
          move > 0 ? ph++ : ph--;
        }
        position[0] += move;
        break;
    }
  }
  return position;
}

console.log("답 : ", solution(park, routes));
