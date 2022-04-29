let menu = 8

if (menu == 1) {
  console.log("물건 구입")
} else if (menu == 2) {
  console.log("잔고 확인")
} else if (menu == 3) {
  console.log("히스토리 확인")
} else {
  console.log("홈으로 돌아가기")
}

switch (menu) {
  case 1:
    console.log("물건 구입")
    break; // 항상 break 해주어야 한다 !
  case 2:
    console.log("잔고 확인")
    break;
  case 3:
    console.log("히스토리 확인")
    break;
  default: // else와 같음
    console.log("홈으로 돌아가기")
}

// switch가 if문을 대용으로 사용할 수 있는 문법이고, 서로 차이는 크게 없지만 switch 문은 사용범위가 비교적 제한되어 있음!
// switch는 값이 하나로 딱 떨어지는 경우에만 사용 가능!
// if는 && 으로 범위조정이 가능하지만, switch는 딱 떨어지는 경우만 가능한 것
// ex) if에서는 1 <= case && case <= 3 의 경우, 1.5 2.5 등 가능하지만 switch 문에서는 불가. 오류가 생김.

// 삼항 연산식일 경우, if문을 간단하게 표현할 수 있다
// 삼항 연산자? 질문 / true일때 / false 일때 로 구성된 연산자
// 삼항 연산식 예시

//let food = "햄버거"
//if (food == "햄버거") {
//  console.log("햄버거 좋아")
//} else if (food == "피자") {
//  console.log("피자 좋아")
//} else {
//  console.log("다 싫어")
//}

// 위의 if 문을, 간단히 삼항연산자로 표현하면

let food = "피자"
let answer1 = food == "햄버거" ? "햄버거 좋아" : "햄버거 싫어"
console.log(answer1)

// 혹은

let answer2 = food == "햄버거" ? "햄버거 좋아" : food == "피자" ? "피자 좋아" : "다 싫어"
console.log(answer2)

// 등으로 연산식을 붙여서 다양하게 표현도 가능
// 삼항연산식 : 조건 ? true일때 return : false일때 return 구조이다.