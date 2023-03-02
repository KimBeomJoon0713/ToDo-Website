const clock_frame_ = document.querySelector("h1#clock_frame");
const week_frame_ = document.querySelector("h3#week_frame");

let week = ["일", "월", "화", "수", "목", "금", "토"];

function get_time() {
  // 시간,분,초
  const date = new Date();
  const Hour = date.getHours(); // 시간
  const Minute = date.getMinutes(); // 분
  const Second = date.getSeconds(); // 초

  const Month = date.getMonth() + 1; // 몇 월
  const _Date = date.getDate(); // 몇 일
  const Day_of_the_week = date.getDay(); // 몇 요일

  clock_frame_.innerHTML = `${Hour < 10 ? "0" + Hour : Hour}:${
    Minute < 10 ? "0" + Minute : Minute
  }:${Second < 10 ? "0" + Second : Second}`;

  week_frame_.innerHTML = `${Month}월 ${_Date}일 ${week[Day_of_the_week]}요일`;
}

get_time();
setInterval(get_time, 1000);
