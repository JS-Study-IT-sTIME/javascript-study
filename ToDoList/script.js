//입력창에 할 일을 입력하고 ➕버튼을 누르면 리스트에 할 일을 표시
//할 일 오른쪽에 있는 ✖️버튼을 누르면 리스트에서 할 일 삭제하기
//리스트에 표시된 할 일을 클릭하면 ✔️버튼이 왼쪽에 나타나면서 할 일에 줄 긋기

'use strict'; // strict mode

let itemList = []; // 할 일들을 담을 배열 선언
let inputButton = document.querySelector(".input__button"); // input__botton 클래스를 가져와 할당하기 
inputButton.addEventListener("click", addItem); // 입력 버튼을 클릭하면 addItem() 함수가 실행되도록 설정

function addItem() {
  let item = document.querySelector(".input__item").value; // 사용자의 입력을 받는 input__item 클래스를 가져오기
  if (item != null) {
    itemList.push(item);
    document.querySelector(".input__item").value = ""; // input__item 클래스의 value 지워주기
    document.querySelector(".input__item").focus(); // focus를 적용하여 커서가 깜박이게 설정
  }

  showList(); // 할 일 표시하는 함수
}

function showList() {
  let list = "<ul>"
  for (let i = 0; i < itemList.length; i++) {
    list += "<li>" + itemList[i] + "<span class='close' id=" + i + ">" + "\u00D7" + "</span></li>";
  } // ul의 형태로 list 변수에 담기
  list += "</ul>";
  document.querySelector(".item__list").innerHTML = list; // innerHTML 속성을 사용하여 item__list 클래스에 list를 담기

  let deleteButtons = document.querySelectorAll(".close"); // 클래스가 close인 모든 element 가져오기
  for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener("click", deleteItem); // deleteButtons 배열의 각 요소를 인덱싱하여 x버튼이 클릭될 경우 해당 item 삭제
  }
}

function deleteItem() {
  let id = this.getAttribute("id");
  itemList.splice(id, 1); // 지정한 인덱스(id)부터 지정한 숫자(1)만큼 요소를 삭제
  showList();
}

let checkList = document.querySelector('.item__list'); // 클래스가 item__list인 요소를 가져와 checkList 변수에 저장
checkList.addEventListener('click', event => {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('checked'); // classList의 toggle 메서드를 사용하여 click 이벤트가 발생했을 때 checked 클래스가 존재한다면(이미 할 일에 줄 그어져 있다면) 제거, 존재하지 않으면 추가하도록 설정 
  }
});