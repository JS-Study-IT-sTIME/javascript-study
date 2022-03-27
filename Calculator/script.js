'use strict';
// 1. digit 버튼 클릭 시 숫자 display에 나오게 하기
// 2. 연산자 함수 
// 3. operator 버튼 클릭 시 display는 빈 화면으로 출력되고
//   연산자 함수를 이용하여 계산하게 됨
//   '=' 버튼 클릭시 계산 결과 보여줌 
// 4. clear 버튼 클릭 시 display 리셋

let currentOp = '',
    currentVal = 0;
let newDigit ='';
const display = document.querySelector('.display');

function digitBtnHandler() {
  const digits = document.querySelectorAll('.digit');
  digits.forEach(digit => {
    digit.addEventListener('click', (evt) => {
      let targetDigit = evt.target.innerText;
      display.value += targetDigit;
      newDigit += targetDigit;
    })
  })
}

function calculate(operator, val1, val2) {
  if (operator === '+') {
    return val1 + val2;
  } else if (operator === '-') {
    return val1 - val2;
  } else if (operator === '*') {
    return val1 * val2;
  } else if (operator === '/') {
    return val1 / val2;
  }
}

function operatorBtnHandler() {
  const operatorBtns = document.querySelectorAll('.operator');
  operatorBtns.forEach(operatorBtn => {
    operatorBtn.addEventListener('click', (evt) => {
      let displayVal = Number(newDigit);
      if (evt.target.innerText === '=') {
        display.value = '';
        display.value = calculate(currentOp, currentVal, displayVal);
        currentOp = '';
        newDigit = '';
        return;
      }
      if (currentOp === '') {
        currentVal = Number(displayVal);
      } else {
        currentVal = calculate(currentOp, currentVal, displayVal);
      }
      currentOp = evt.target.innerText;
      display.value += currentOp;
      newDigit = '';
    })
  })
}

function clearBtnHandler() {
  const clearBtn = document.querySelector('.clear');
  clearBtn.addEventListener('click', () => {
    const display = document.querySelector('.display');
    currentOp = '';
    currentVal = 0;
    newDigit = '';
    display.value = '';
  })
}

function decimalBtnHandler() {
  const decimalBtn = document.querySelector('.decimal');
  decimalBtn.addEventListener('click', () => {
    const display = document.querySelector('.display');
    if (!newDigit.includes('.')) {
      display.value += '.';
      newDigit += '.';
    }
  })
}

function init() {
  digitBtnHandler();
  operatorBtnHandler();
  clearBtnHandler();
  decimalBtnHandler();
}

init();