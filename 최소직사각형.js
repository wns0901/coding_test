// 명함 지갑을 만드는 회사에서 지갑의 크기를 정하려고 합니다. 다양한 모양과 크기의 명함들을 모두 수납할 수 있으면서, 작아서 들고 다니기 편한 지갑을 만들어야 합니다. 이러한 요건을 만족하는 지갑을 만들기 위해 디자인팀은 모든 명함의 가로 길이와 세로 길이를 조사했습니다.

// 아래 표는 4가지 명함의 가로 길이와 세로 길이를 나타냅니다.

// 명함 번호	가로 길이	세로 길이
// 1	60	50
// 2	30	70
// 3	60	30
// 4	80	40
// 가장 긴 가로 길이와 세로 길이가 각각 80, 70이기 때문에 80(가로) x 70(세로) 크기의 지갑을 만들면 모든 명함들을 수납할 수 있습니다. 하지만 2번 명함을 가로로 눕혀 수납한다면 80(가로) x 50(세로) 크기의 지갑으로 모든 명함들을 수납할 수 있습니다. 이때의 지갑 크기는 4000(=80 x 50)입니다.

// 모든 명함의 가로 길이와 세로 길이를 나타내는 2차원 배열 sizes가 매개변수로 주어집니다. 모든 명함을 수납할 수 있는 가장 작은 지갑을 만들 때, 지갑의 크기를 return 하도록 solution 함수를 완성해주세요.

// sizes	result
// [[60, 50], [30, 70], [60, 30], [80, 40]]	4000
// [[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]]	120
// [[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]]	133

function solution(sizes) {
<<<<<<< HEAD
  let w1 = 0;
  let w2 = 0;
  let h1 = 0;
  let h2 = 0;
  sizes.forEach((x, i) => {
    w2 = w1 < x[0] ? w1 : w2;
    w1 = w1 < x[0] ? x[0] : w1;
    h2 = h1 < x[1] ? h1 : h2;
    h1 = h1 < x[1] ? x[1] : h1;
  });
=======
  let w = 0;
  let wSum = 0;
  let h = 0;
  let hSum = 0;
  let avg = 0;
>>>>>>> 451b2edd2847d902ffc533b2bba92d1c802417a8

  sizes.forEach((x) => {
    w = w < x[0] ? x[0] : w;
    wSum += x[0];
    h = h < x[1] ? x[1] : h;
    hSum += x[1];
  });
  avg = (w > h ? wSum : hSum) / sizes.length;
  let where = w > h ? 0 : 1;

  sizes.forEach((x) => {});

  return;
}

console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ])
);
