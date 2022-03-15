// html의 element들 가져오기
const calculator = document.querySelector('.calculator'); // calculator 엘리먼트와 그 자식 엘리먼트의 정보를 모두 담고 있음
const buttons = calculator.querySelector('.calculator__buttons'); // calculator__buttons 엘리먼트와 그 자식 엘리먼트의 정보를 모두 담고 있음
const operator = document.querySelector('.calculator__operator'); // calculator__operator 엘리먼트와 그 자식 엘리먼트의 정보를 모두 담고 있음
const display = document.querySelector('.calculator__display'); // calculator__display 엘리먼트와 그 자식 엘리먼트의 정보를 모두 담고 있음

function calculate(n1, n2, operator) {
    let result = 0;

    if (operator === '+') { // '+'버튼을 눌렀을 때
        result = Number(n1) + Number(n2);
    }
    else if (operator === '-') { // '-'버튼을 눌렀을 때
        result = Number(n1) - Number(n2);
    }
    else if (operator === '*') { // '*'버튼을 눌렀을 때
        result = Number(n1) * Number(n2);
    }
    if (operator === '/') { // '/'버튼을 눌렀을 때
        result = Number(n1) / Number(n2);
    }
    return String(result);
}

let firstNum = '';
let operatorForAdvanced = '';
let previousKey = '';
let previousNum = '';

buttons.addEventListener('click', function(event) {
    const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있음
    const action = target.classList[0]; // 클릭된 HTML 엘리먼트의 클래스 정보를 가져옴
    const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옴
    <br></br>
    if (target.matches('button')) { // elem.matches(css)는 요소 elem이 주어진 css 선택자와 일치하는지 여부를 판단 - true/false
        if (action  === 'number') { // 클릭된 HTML 엘리먼트의 클래스 이름이 'number'라면
            if (display.textContent === '0' && operatorForAdvanced === '') { // 기존 계산기 숫자가 0이고, 오퍼레이터 버튼이 눌리지 않은 상태라면
                display.textContent = buttonContent;
                firstNum = display.textContent; // 첫 번째 숫자를 변수에 할당
            }
            else if (display.textContent !== '0' && operatorForAdvanced === '') {

            }
            else if (display.textContent !== '0' && operatorForAdvanced !== '') {

            }
        }
    }
})