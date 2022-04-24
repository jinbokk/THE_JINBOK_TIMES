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