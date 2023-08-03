/*
길 -> O 장애물 -> X 직사각형 격자 스타트 지점 -> S
["방향 거리"] - ["E 5"]
수행 전 확인 사항 --> 해당하면 명령 무시
  - 이동할  시 공원을 벗어나는 지
  - 이동 시 장애물을 만나는 지
모든 이동 후 [세로 좌표, 가로 좌표] 반환
SOOXO
OOOXO
OXOOO
XOOOO
*/
// const park = ["SOO", "OOO", "OOO"];
const park = ["SOOXO", "OOOXO", "OXOOO", "XOOOO"];
// const routes = ["E 2", "S 2", "W 1"];
const routes = ["E 2", "S 2", "W 2", "S 1", "W 1"];

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
    console.log("before", position);
    console.log(route);
    s: switch (direction) {
      case "E":
      case "W":
        if (position[1] + move >= wLength || position[1] + move < 0) break;
        console.log(position[1] + move);
        for (
          let p = position[1] + move > 0 ? 1 : -1;
          // p 값이 0이면 무한 루프가 돌아버림
          p <= position[1] + move;
          move > 0 ? p++ : p--
        ) {
          console.log(p);
          if (park[position[0]][p] === "X") break;
        }
        position[1] += move;
        break;
      case "S":
      case "N":
        if (position[0] + move >= hLength || position[0] + move < 0) break;
        for (
          let p = position[0] + move > 0 ? 1 : -1;
          p <= position[0] + move;
          move > 0 ? p++ : p--
        ) {
          if (park[p][position[1]] === "X") break s;
        }
        position[0] += move;
        break;
    }
    console.log("after", position);
  }
  return position;
}

console.log(solution(park, routes));
