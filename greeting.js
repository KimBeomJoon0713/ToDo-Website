// 로그인의 변수
const login_id = document.querySelector('#login-id');
const login_from = document.querySelector('#login-from');

// 할 일 감추기 변수
const _to_do_from = document.querySelector('#to_do_from');

// 인사 메세지의 변수
const greetingtext = document.querySelector('#greeting');

// 시계 뼈대의 변수
const clock_frame = document.querySelector('h1#clock_frame');

// 시간대의 맞춘 인사말의 변수
const now_time = new Date();
const now_hour = now_time.getHours();
let greeting;

// 시간별로 나타내는 인사말
if (8 <= now_hour && now_hour <= 11) {
    greeting = 'Good Morning';
}
else if (12 <= now_hour && now_hour <= 17) {
    greeting = 'Good Afternoon';
}
else if (18 <= now_hour && now_hour <= 20) {
    greeting = 'Good Evening';
}
else {
    greeting = 'Good Night';
}

function onSubmit(event) {
    event.preventDefault()
    greetingtext.innerHTML = greeting + ',' + ' ' + login_id.value;

    clock_frame.classList.remove('hidden');
    _to_do_from.classList.remove('hidden');
    login_from.classList.add('hidden');

    localStorage.setItem("user's name", login_id.value);
}

// --------------------------------------------------------------------

const user_name = localStorage.getItem("user's name");

function logout() {
    localStorage.clear();
    _to_do_from.classList.add('hidden');
    location.reload();
}

if (user_name) {
    // 이미 이름 치고 들어온 사람
    login_from.classList.add('hidden');
    clock_frame.classList.remove('hidden');
    _to_do_from.classList.remove('hidden');

    greetingtext.innerHTML = greeting + ',' + ' ' + user_name;
}
else {
    // 처음 온 사람
    login_from.addEventListener('submit', onSubmit);
}

greetingtext.addEventListener('dblclick', logout);
