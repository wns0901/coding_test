let video_len = '';
let pos = '';
let op_start = '';
let op_end = '';
let commands = [];
let answer = '';
let result = '';

function solution(video_len, pos, op_start, op_end, commands) {
  const video_len_sec = convertToSeconds(video_len);
  const op_start_sec = convertToSeconds(op_start);
  const op_end_sec = convertToSeconds(op_end);
  let pos_sec = convertToSeconds(pos);

  pos_sec = skipOpening(op_start_sec, op_end_sec, pos_sec);

  commands.forEach(command => {
    pos_sec = commandsMap[command](pos_sec, video_len_sec);
    pos_sec = skipOpening(op_start_sec, op_end_sec, pos_sec);
  });

  return convertToTime(pos_sec);
}

const commandsMap = {
  // next: (pos_sec, video_len_sec) => {
  //   pos_sec += 10;
  //   if (pos_sec > video_len_sec) {
  //     pos_sec = video_len_sec;
  //   }
  //   return pos_sec;
  // },
  // prev: (pos_sec, video_len_sec) => {
  //   pos_sec -= 10;
  //   if (pos_sec < 0) {
  //     pos_sec = 0;
  //   }
  //   return pos_sec;
  // },
  next: (pos_sec, video_len_sec) => Math.min(pos_sec + 10, video_len_sec),
  prev: (pos_sec, _) => Math.max(pos_sec - 10, 0),
}

function convertToSeconds(time) {
  const [m, s] = time.split(':').map(Number);
  return m * 60 + s;
}

function convertToTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function skipOpening(op_start_sec, op_end_sec, pos_sec) {
  if (op_start_sec <= pos_sec && pos_sec <= op_end_sec) {
    return op_end_sec;
  }

  return pos_sec;
}

// case 1
video_len = "34:33";
pos = "13:00";
op_start = "00:55";
op_end = "02:55";
commands = ["next", "prev"];	
result = "13:00";
answer = solution(video_len, pos, op_start, op_end, commands);


console.log("1번: " + (answer === result ? "정답" : "오답"));
console.log("출력: " + answer);
console.log("답: " + result);
console.log("=========================");

// case 2
video_len = "10:55";
pos = "00:05";
op_start = "00:15";
op_end = "06:55";
commands = ["prev", "next", "next"];	
result = "06:55";
answer = solution(video_len, pos, op_start, op_end, commands);

console.log("2번: " + (answer === result ? "정답" : "오답"));
console.log("출력: " + answer);
console.log("답: " + result);
console.log("=========================");

// case 3
video_len = "07:22";
pos = "04:05";
op_start = "00:15";
op_end = "04:07";
commands = ["next"];	
result = "04:17";
answer = solution(video_len, pos, op_start, op_end, commands);

console.log("3번: " + (answer === result ? "정답" : "오답"));
console.log("출력: " + answer);
console.log("답: " + result);
console.log("=========================");