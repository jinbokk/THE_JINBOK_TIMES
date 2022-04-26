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
  step("jump","high","2") // 매개변수가 있는 펑션은 매개변수 입력 또한 해줘야 한다!
  makeBurger()
}

makeSet()

// 위는 function으로 function을 묶은 예.