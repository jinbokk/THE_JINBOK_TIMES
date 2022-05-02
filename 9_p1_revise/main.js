// 1. 1~100 사이의 임의의 수가 설정된다.

function pickRandomNum() {
  randomNum = Math.floor(Math.random() * 100 + 1);
  console.log(`The Number is "${randomNum}"`)
}

pickRandomNum(); // 정상출력 확인

// 2. user가 번호를 입력하고, Check 버튼을 눌렀을때 UP,DOWN,CORRECT, 범위 밖의 숫자 등 각각의 경우가 result_area에 출력이 되도록 한다

let userInput = document.getElementById("user_input");
userInput.addEventListener("focus", function () {
  userInput.value = "";
});

let checkBtn = document.getElementById("check_btn");
checkBtn.addEventListener("click", checking);

let resultArea = document.getElementById("result_area");

let chancesArea_1 = document.getElementById("chances_area_1");
let chancesArea_2 = document.getElementById("chances_area_2");

let remainingChances = 5;

let resetBtn = document.getElementById("reset_btn");
resetBtn.addEventListener("click", reset);

let history = [];

let displayImg = document.getElementById("img_area");

function changeImg() {
  if (remainingChances == 4) {
    document.getElementById("img_area").src = "./img/R4_GUESS_Face_Emoji.png";
  }
  if (remainingChances == 3) {
    document.getElementById("img_area").src = "./img/R3_ANGRY_Face_Emoji.png";
  }
  if (remainingChances == 2) {
    document.getElementById("img_area").src = "./img/R2_SUPER_ANGRY_Face_Emoji.png";
  }
  if (remainingChances == 1) {
    document.getElementById("img_area").src = "./img/R1_OMG_Face_Emoji.png";
  }
  if (remainingChances == 0) {
    document.getElementById("img_area").src = "./img/R0_DIZZY_Face_Emoji.png";
  }
}

function checking() {
  let userValue = userInput.value; // 3. remaining_chances 구현 > 처음 기회는 5회 > CHECK 버튼을 누를때마다 1회씩 차감 > 횟수가 1회 미만으로 갈시 disabled 활성화

  if (userValue < 1 || userValue > 100) {
    resultArea.textContent = "Enter the number between 1 to 100"
    return;
  }

  if (history.includes(userValue)) {
    resultArea.textContent = `"${userValue}" is already been entered`;
    return;
  }

  remainingChances--;
  chancesArea_1.textContent = `Remaining chances`
  chancesArea_2.textContent = `${remainingChances}`

  changeImg()

  history.push(userValue);
  console.log(history);

  if (userValue == randomNum) {
    resultArea.textContent = "CORRECT!"
    document.getElementById("img_area").src = "./img/C_CLAPPING_Emoji.png";
    checkBtn.disabled = true;
  } else if (userValue > randomNum) {
    resultArea.textContent = "DOWN!"
  } else if (userValue < randomNum) {
    resultArea.textContent = "UP!"
  }

  if (remainingChances < 1) {
    checkBtn.disabled = true;
    resultArea.textContent = "Try again!";
  }
}

function reset() { // 4. reset 버튼 구현 > reset 버튼 누를시, 남은 횟수 초기화 + CHECK 버튼 활성화 + randomNum 리셋 + userInput 초기화 + result_area 초기화
  pickRandomNum();
  userInput.value = "";
  remainingChances = 5;
  history = [];
  checkBtn.disabled = false;
  chancesArea_1.textContent = `Remaining chances`;
  chancesArea_2.textContent = `${remainingChances}`;
  resultArea.textContent = "The results are shown here";
  document.getElementById("img_area").src = "./img/R5_SMILING_Face_Emoji.png";
}

// 부가기능..
// 1. userInput에 focus시 입력했던 초기화된 상태에서 시작하도록 > 이벤트 리스너로. focus시 초기화시키는 함수 작동하게끔
// 2. 기존에 입력했던 숫자를 재입력시 중복임을 출력 > userInput을 array로 만들고, includes 함수 사용하여 중복숫자 찾아내고 문장 출력
// 3. 이미지 애니메이션, 남은횟수 애니메이션 추가 // CHECK 버튼을 눌렀을때, 애니메이션이 새로 재생되도록 하고 싶은데 구현하는 방법을 모르겠다.
// 이미지 애니메이션의 경우, css에서 이미지 태그 자체에 애니메이션을 걸어두어서 지속적으로 재생되지만, 남은횟수 애니메이션의 경우 처음에만 재생되는 문제점이 있다.