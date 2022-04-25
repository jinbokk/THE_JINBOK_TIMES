// if(조건문){
//   조건이 충족하면 할 일들
// }

if (true) {
  console.log("조건은 참입니다")
} else {
  console.log("조건은 거짓입니다")
}

if (false) {
  console.log("조건은 참입니다")
} else {
  console.log("조건은 거짓입니다")
}

//else 는 '참이 아닐때' 를 출력

let age_a = 21

if (age_a > 20) {
  console.log("운전이 가능합니다")
} else {
  console.log("운전이 불가능합니다")
}

let age_b = 15

if (age_b > 20) {
  console.log("운전이 가능합니다")
} else {
  console.log("운전이 불가능합니다")
}


let age_c = 18
if (age_c > 20) {
  console.log("운전이 가능합니다")
} else if (age_c >= 18) {
  console.log("오토바이 운전만 가능합니다")
} else {
  console.log("운전이 불가능합니다") // else에도 if문 추가가 가능하다 ! > if문은 필수이고, else if 및 else 는 선택 사항이다!
}

let age_d = 15
if (age_d > 20) {
  console.log("운전이 가능합니다")
} else if (age_d >= 18) {
  console.log("오토바이 운전이 가능합니다")
} else {
  console.log("운전이 불가능합니다")
} // else에도 if문 추가가 가능하다 ! > if문은 필수이고, else if 및 else 는 선택 사항이다!

// '참' 순서의 중요성! 주의!

let age_e = 21

if (age_e >= 18) {
  console.log("오토바이 운전만 가능합니다")
} else if (age_e > 20) {
  console.log("운전이 가능합니다")
} else {
  console.log("운전이 불가능합니다")
} // 이 경우, 20세 이상으로 운전이 가능하다고 나오는 것이 아닌, 첫 번째 참 필터인 '18세 이상' 의 참 필터에 걸리게 되어 오토바이 운전이 가능하다고 출력된다! 
// 즉, if문은 조건의 순서가 중요! 작은것부터 큰것 순으로 둘 것!

let age_f = 21

if (18 <= age_f && age_f <= 20) {
  console.log("오토바이 운전만 가능합니다")
} else if (age_f > 20) {
  console.log("운전이 가능합니다")
} else {
  console.log("운전이 불가능합니다")
} // and 문(&&)으로 조건을 적용할 수도 있다.



// 조건 안에 조건을 넣을 수도 있다! (if문 안에 if문)

let age_g = 21
let licence_g = true

if (age_g > 20) {
  if (licence_g == true) {
    console.log("운전이 가능합니다")
  } else {
    console.log("운전면허가 필요합니다")
  }
} else {
  console.log("운전이 불가능합니다")
}

let age_h = 21
let licence_h = false

if (age_h > 20) {
  if (licence_h == true) {
    console.log("운전이 가능합니다")
  } else {
    console.log("운전면허가 필요합니다")
  }
} else {
  console.log("운전이 불가능합니다")
}

// =는 '같다'의 의미가 아닌, 값 할당의 연산자이고, 
// 실제로 '같다'의 의미를 가지려면 == 연산자가 필요하다 !

// '같지 않다'의 의미는 != 연산자 이다! (!는 코딩에서 not 의 의미이다)

let age_i = 21
let licence_i = false

if (age_i > 20) {
  if (licence_i != true) {
    console.log("운전이 가능합니다")
  } else {
    console.log("운전면허가 필요합니다")
  }
} else {
  console.log("운전이 불가능합니다")
}


// test

// q1.유저가 입력하는 숫자가 0인지 음성인지 양성인지 판단하는 프로그램을 만드시오

let number = 10

if (number < 0) {
  console.log("음수 입니다")
} else if (number > 0) {
  console.log("양수 입니다")
} else {
  console.log("0 입니다")
}

// if와 else는 한 번만 사용할 수 있지만, else if는 여러 번 사용할 수 있다. 처음 오답은 if문 다음 별개의 if문을 또 달았어서 오류였다.



// q2. 나는 대학교 교수다. 레포트 점수에따라 등급을 매기는 프로그램을 만드시오
// 90~100 : A
// 80~89 : B
// 70~79 : C
// 60~69 : D
// less than 59 : F

let score = 100

if (90 <= score && score <= 100) {
  console.log("A")
} else if (80 <= score && score <= 89) {
  console.log("B")
} else if (70 <= score && score <= 79) {
  console.log("C")
} else if (60 <= score && score <= 69) {
  console.log("D")
} else if (0 <= score && score <= 59) {
  console.log("F")
} else {
  console.log("잘못된 범위의 점수입니다")
}

// 주의! 비교할거면 사이에 and (&&) 연산자를 꼭 넣어야 한다! << 오답 냈었음



// q3. 한 지원자가 우리회사에 지원을했다. 지원자가 사용가능한 스킬은 배열에 제공이 된다
// let skills = ["HTML","CSS","Javascript","React"]
// Javascript와 React 둘다 할줄 안다면 “합격!” Javascript와 React 둘중 하나만 할줄 안다면 “예비”, 두 스킬이 없다면 “탈락” 을 보여주는 프로그램을 짜시오

// input : let skills = ["HTML","CSS","Javascript","React"]
// output: 합격 

// input:let skills = ["HTML","CSS","Javascript"] 
// output: 예비 

// input:let skills = ["HTML","CSS"] 
// output: 탈락


// 작성한 오답
// let skills1 = ["HTML", "CSS", "Javascript", "React"]

//if (skills1.includes("Javascript" && "React")) {
//  console.log("합격")
//} else if (skills1.includes("Javascript" || "React")) {
//  console.log("예비")
//} else {
//  console.log("탈락")
//}

//let skills2 = ["HTML", "CSS", "React"]

//if (skills2.includes("Javascript" && "React")) {
//  console.log("합격")
//} else if (skills2.includes("Javascript" || "React")) {
//  console.log("예비")
//} else {
//  console.log("탈락")
//}

//let skills3 = ["HTML", "CSS"]

//if (skills3.includes("Javascript" && "React")) {
//  console.log("합격")
//} else if (skills3.includes("Javascript" || "React")) {
//  console.log("예비")
//} else {
//  console.log("탈락")
//}

let skills1 = ["HTML", "CSS", "Javascript", "React"]

if (skills1.includes("Javascript") && skills1.includes("React")) {
  console.log("합격")
} else if (skills1.includes("Javascript") || skills1.includes("React")) {
  console.log("예비")
} else {
  console.log("탈락")
}

let skills2 = ["HTML", "CSS", "React"]

if (skills2.includes("Javascript") && skills2.includes("React")) {
  console.log("합격")
} else if (skills2.includes("Javascript") || skills2.includes("React")) {
  console.log("예비")
} else {
  console.log("탈락")
}

let skills3 = ["HTML", "CSS"]

if (skills3.includes("Javascript") && skills3.includes("React")) {
  console.log("합격")
} else if (skills3.includes("Javascript") || skills3.includes("React")) {
  console.log("예비")
} else {
  console.log("탈락")
}