console.log("빵두기")
console.log("상추두기")
console.log("고기패티두기")
console.log("뚜껑덮기")

console.log("감튀박스선택")
console.log("감튀담기")

console.log("콜라통선택")
console.log("얼음담기")
console.log("콜라담기")

// 위의 프로세스들을 함수 안에 담아서 관리한다.

function makeBurger() {
  console.log("빵두기")
  console.log("상추두기")
  console.log("고기패티두기")
  console.log("뚜껑덮기")
}

function makeFrenchfries() {
  console.log("감튀박스선택")
  console.log("감튀담기")
}

function serveCoke() {
  console.log("콜라통선택")
  console.log("얼음담기")
  console.log("콜라담기")
}

makeBurger()
// 위처럼 함수이름을 입력해주어야 작동한다
// ()괄호까지 포함! 괄호 없이는 '변수'를 부르는 것 뿐이다.

function step(move, action, num) {
  console.log("step")

  if (num < 1) {
    return "리턴 프로세스가 끝남을 보여줌"
  }

  if (move == "jump") {
    console.log("jump")
  } else if (move == "slide") {
    console.log("slide")
  }

  console.log("Done")
  console.log(move, ",", action, ",", num)

  return "성공"
}

// step("jump", "high", "2")
// 위는 매개변수를 활용하는 방법.


let result_1 = step("jump", "high", "2")

console.log("리턴 공부중", result_1)

// 위는 return을 활용하는 방법.
// return은 강력한 기능이다. 
// return을 만나는 순간 프로세스가 끝남.

let result_2 = step("jump", "high", "0")

console.log("리턴 프로세스 끝남 실습", result_2)

// 위는 return 프로세스 끝남을 보여줌


// function을 function으로 묶어 큰 틀을 만들수도 있다!

function makeSet() {
  step("jump", "high", "2") // 매개변수가 있는 펑션은 매개변수 입력 또한 해줘야 한다!
  makeBurger()
}

makeSet()

// 위는 function으로 function을 묶은 예.




// test

// q1. "안녕 내 이름은 제시카야"라는 문장을 프린트하는 함수 'greet’를 만드시오


function greet_q1() {
  console.log("안녕 내 이름은 제시카야")
}

greet_q1()

// q2. 이름을 매개변수로 전달받아 다양한 이름을 프린트 할 수 있게 함수를 수정하시오 예) “안녕 내 이름은 에밀리야”, “안녕 내 이름은 할리야”

function greet_q2(name) {
  console.log("안녕 내 이름은 " + name + "야")
}

greet_q2("에밀리")

// q3. 매개변수로 전달받은 이름을 반환하게 함수를 수정하시오

function greet_q3(name) {
  console.log("안녕 내 이름은 " + name + "야")
  return
}

greet_q3("할리")

// q4. meetAt 함수를 만들어주세요.
// 인자를 세개 받습니다.
// 첫번째 인자는 년도에 해당하는 숫자입니다.
// 두번째 인자는 월에 해당하는 숫자입니다.
// 세번째 인자는 일에 해당하는 숫자입니다.
// 년도 인자만 받았을 경우 → "1234년" 과 같은 형식의 문자열을 리턴 해주세요.
// 년도,월 인자를 받았을 경우 → 년도와 월을 조합해서 "1234년 5월" 과 같은 형식의 문자열을 리턴 해주세요.
// 년도,월,일 인자를 전부 받았을 경우 → 년도,월,일을 조합해서 "1234/5/6" 과 같은 형식의 문자열을  리턴 해주세요.
// 결과 예시
// meetAt(2022); // 결과 --> 2022년
// meetAt(2032, 3); // 결과 --> "2032년 3월"
// meetAt(1987, 10, 28); // 결과 --> "1987/10/28"

//function meetAt(year, month, date) {
//  console.log(year + " 년") 
// return
//  console.log(year + " 년 " + month + " 월")
//  return
//  console.log(year + " 년 " + month + " 월 " + date + " 일")
//  return
//}

//function meetAt(year, month, date) {
//  if (date) {
//    return (year + " / " + month + " / " + date)
//  }
//  if (month) {
//    return (year + " 년 " + month + " 월")
//  }
//  if (year) {
//    return (year + " 년")
//  }
//}

function meetAt(year, month, date) {
  if (year && month && date) { // year && month && date 정보를 date로 바꾸어서 간략하게 정리할 수도 있다. 아래도 같은 방식으로 정리 가능!
    return `${year} / ${month} / ${date}`
  } else if (year && month) {
    return `${year}년 ${month}월`
  } else if (year) {
    return `${year}년`
  }
} // backtick (` = 백틱) 기호 주의!

console.log(meetAt(2022))
console.log(meetAt(2022, 10))
console.log(meetAt(2022, 10, 24))


// q5. findSmallestElement 함수를 구현해 주세요.
// findSmallestElement 의 arr 인자는 숫자 값으로만 이루어진 배열입니다.
// arr 의 값들 중 가장 작은 값을 리턴 해주세요.
// 만일 arr 가 비어있으면 0을 리턴 해주세요.
// 예를 들어, 다음과 같은 배열이 인자(input)으로 들어왔다면 0이 리턴 되어야 합니다.
// 이용되는 배열 [100,200,3,0,2,1]


function findSmallestElement(arr) {
  if (arr.length == 0) { // array가 비어있다는 표현 방법.
    return 0
  }
  let result = arr[0] // array의 첫번째 인덱스 값
  for (let i = 1; i < arr.length; i++) {
    if (result > arr[i]) {
      result = arr[i]
    }
  }
  return result
}

console.log(findSmallestElement([12, 124, 141, 1, 2030]))
console.log(findSmallestElement([100, 200, 3, 0, 2, 1]))
console.log(findSmallestElement([]))


// q6. 돈을 매개변수로 받으면 몇개의 지폐와 동전이 필요한지 최소 개수를 계산해주는 함수를 만드시오 //  모르겠다.. 강의참고
// 출력 예 )
// 12300인 경우
// 50000 X 0
// 10000 X 1
// 5000  X 0
// 1000 X 2
// 500 X 0
// 100 X 3

// 예시의 12300원 logic > 12300 5만원권?X 그럼 1만원권?O 나머지 2300 5천원권?X 1천원권?O...

let unit = [50000, 10000, 5000, 1000, 500, 100]

function ChangeCalculator(money) {
  for (let i = 0; i < unit.length; i++) { // 돈을 계속 비교해 나가기 위한 for문
    let num = Math.floor(money / unit[i]) // Math.floor = '버림' 계산함수이다. Math 객체 안에는 다양한 식이 있다. 이 함수를 쓰지 않는다면 소숫점까지 계산되어 출력된다 !
    console.log(`${unit[i]}X${num}`) // 눈에 보기 쉽게 프린트
    money = money - (unit[i] * num) // 계속 처음의 money값으로 비교하는 것이 아닌, money값을 refresh 해 주어야 하므로 !
  }
}

ChangeCalculator(12300)