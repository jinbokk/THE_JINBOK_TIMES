// Logic
// 1. 랜덤번호 지정
// 2. user가 번호를 입력한다. 그리고 Go 버튼을 누른다.
// 3. 만약 user가 랜덤번호를 맞추면, 맞췄습니다
// 4. 만약 랜덤번호 < user번호 = Down !
// 5. 만약 랜덤번호 > user번호 = Up !
// 6. Reset 버튼을 누르면 게임이 리셋된다.
// 7. 5번의 기회를 다 쓰면 게임이 끝난다. (Go 버튼이 disable)
// 8. user가 1~100 범위 밖의 숫자를 입력하면 알려준다. (기회를 소모하지 않는다.)
// 9. user가 이미 입력한 숫자를 또 입력하면 알려준다. (기회를 소모하지 않는다.)

let computerNum = 0;
let PlayButton = document.getElementById("play_button");
let userInput = document.getElementById("user_input");
let resultArea = document.getElementById("result_area");
let resetButton = document.getElementById("reset_button");
let chances = 5;
let gameOver = false;
let chancesArea = document.getElementById("chances_area")
let history = []

PlayButton.addEventListener("click", play);
// addEventListener("어떠한이벤트", 변수)
// play() 함수로서 넘기는 것이 아니라, play 변수로서 넘긴다. 함수로서 넘기면 함수가 실행되어 버리기 때문이다. 함수도 변수로 넘길 수 있다!
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", function () {
  userInput.value = "";
}); //// 여기서 쓰이는 function은 다른곳에서는 쓰이지 않는 1회성 단발성 함수라서, 메모리를 차지하지 않도록 익명의 함수를 사용하면 좋다.


function pickRandomNum() {
  computerNum = Math.floor(Math.random() * 100) + 1;
  console.log("The number is?", computerNum)
}

function play() {
  let userValue = userInput.value

  if (userValue < 1 || userValue > 100) {
    resultArea.textContent = "Please enter a number between 1 and 100";
    return; // 1~100 범위를 벗어난 숫자를 입력했을때 return을 시켜줘야한다! 그렇지 않으면 하위 펑션들이 그대로 실행되어버림.
  }

  if (history.includes(userValue)) {
    resultArea.textContent = `${userValue} has already been entered`;
    return;
  }

  chances--; // i++처럼, 1씩 감소됨을 표현
  chancesArea.textContent = `${chances} chances left`; // ""는 정적인 문장입력이고, 백틱은 동적인 문장입력이다.
  console.log("chance", chances);

  if (userValue < computerNum) {
    resultArea.textContent = "Up!"
  } else if (userValue > computerNum) {
    resultArea.textContent = "Down!"
  } else if (userValue = computerNum) {
    resultArea.textContent = "That's right!"
    gameOver = true;
  }

  history.push(userValue)

  if (chances < 1) {
    gameOver = true;
  }

  if (gameOver == true) {
    PlayButton.disabled = true;
  }
}

function reset() { //reset의 기능은, 1. user input창이 깨끗하게 정리되고, 새로운 번호가 생기고, resultArea의 textContent가 업데이트된다.
  userInput.value = "";
  pickRandomNum();
  gameOver = false;
  PlayButton.disabled = false;
  resultArea.textContent = "New Game Start!";
  chances = 5;
  chancesArea.textContent = `${chances} chances left`;
  history = [];
}

pickRandomNum();