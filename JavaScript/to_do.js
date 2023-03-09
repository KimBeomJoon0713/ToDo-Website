const to_do_from = document.querySelector("#to_do_from");
const to_do_from_text_input = document.querySelector("#to_do_input");
const to_do_list = document.querySelector("#to_do_list");

let toDos = []; //⭐

// 배열이 바뀌면 항상 호출
function Save_ToDos() {
  localStorage.setItem("toDos", JSON.stringify(toDos));
}

function DeleteToDo(event) {
  // li 지우기
  const Parnet_li = event.target.parentElement;
  Parnet_li.remove();

  // LS에서도 지우기
  const Parnet_li_id = Parnet_li.id;

  toDos = toDos.filter((element) => element.id !== parseInt(Parnet_li_id));
  Save_ToDos();
}

// 할일 목록을 페이지에 띄우기
function IndiCate_ToDo(to_do) {
  const to_do_creat_li = document.createElement("li");

  const to_do_creat_li_button = document.createElement("button");
  const to_do_creat_li_span = document.createElement("span");

  to_do_creat_li_span.innerText = to_do.text;
  to_do_creat_li_button.innerText = "✅";

  to_do_creat_li.appendChild(to_do_creat_li_button);
  to_do_creat_li.appendChild(to_do_creat_li_span);
  to_do_list.appendChild(to_do_creat_li);

  to_do_creat_li.id = to_do.id;

  to_do_creat_li_button.addEventListener("click", DeleteToDo);
}

function on_ToDo_Submit(event) {
  // 사용자가 입력한 할 일을 가져오고, 배열에 저장

  event.preventDefault();

  // object == 구조체 변수
  const to_do = {
    text: to_do_from_text_input.value,
    id: Date.now(),
  };

  toDos.push(to_do);
  Save_ToDos();
  IndiCate_ToDo(to_do);
  to_do_from_text_input.value = "";
}

const LocalStorage_In_ToDos = localStorage.getItem("toDos");

if (LocalStorage_In_ToDos) {
  const Parse_LS_In_ToDos = JSON.parse(LocalStorage_In_ToDos);

  toDos = Parse_LS_In_ToDos;

  toDos.forEach((element) => IndiCate_ToDo(element));
}

to_do_from.addEventListener("submit", on_ToDo_Submit);
