let color = "black"
color = "pink"
console.log(color)


let test1 = 1 + 3 + 2 + 4
console.log(test1)


let test2 = 10
test2 = test2 + 10
console.log(test2)

let test3 = 10
test3 = test3 % 10
console.log(test3) // 나머지 연산자

let test4 = 10
test4 = test4 > 10
console.log(test4)

let test5 = 10
test5 = test5 >= 10
console.log(test5)

let test6 = 10
test6 = test6 >= 10 || test6 < 10
console.log(test6) // or 연산자 (둘 중 하나만 true 여도 true)

let test7 = 10
test7 = test7 >= 10 && test7 < 10
console.log(test7) // and 연산자 (둘 중 하나만 false 여도 false)

// 아래는 CRN 테스트 문제

// Q1. a와 b의 값을 바꾸시오
let a = 1
let b = 2
console.log(a,b) // 1,2
// 풀이
let c = a
a = b
b = c
console.log(a,b) // 2,1

// Q2. 다음 연산자들의 결과값을 예측한후 console.log()를 통해 확인해 보시오

let q1 = 20 + 30 // 정답
console.log(q1) // 50

let q2 = "20" + "30" // 정답
console.log(q2) // 2030

let q3 = "Hello" + " " + 2021 // 정답
console.log(q3) // Hello 2021

let q4 = 1 + 2 * 3 // 정답
console.log(q4) // 7

let q5 = (1 + 3) ** 2 // 정답
console.log(q5) // 16 (**연산자는 거듭제곱)

let q6 = 1 / 0 // 오답 = 무한한 값은 Infinity 표기됨
console.log(q6) // 0으로 나눌수 있나? false? // Infinity

let q7 = 6 % 2 // 오답 = %와 /연산자를 다소 혼동하였음. 6을 2로 나누고 나서 반환된 '나머지 값'은 0이다
console.log(q7) // 3 // 0

let q8 = 7.5 % 2 // 오답 = 아, 7.5 나누기 2를 하고 남은 나머지 값이 아니라, 7.5 = 2 + 2 + 2 + 1.5 이고 이때의 1.5를 반환하는구나
console.log(q8) // 3 // 1.5

let q9 = 5 == 5 // 정답
console.log(q9) // true (==연산자는 두 값이 같으면 true)

let q10 = 5 === 5 // 정답
console.log(q10) // true

let q11 = 5 == "5" // 오답 // ==연산자는 넘버값 이후 스트링값이 와도 알아서 변환하여 "여유롭게" 비교한다
console.log(q11) // false // true

let q12 = 5 === "5" // 정답 // ===연산자는 ==와는 다르게, "엄격하게" 비교하여 넘버와 스트링의 차이까지 비교한다.
console.log(q12) // false

let q13 = 5 != 5.0 // 정답
console.log(q13) // false (! 연산자는 ||또는 &&그리고 !아닌 중 하나)

let q14 = 5 !== 5.0 // 정답
console.log(q14) // false

let q15 = "true" === true // 오답 // true 라는 값과 비교한 것이 아닌, 스트링을 반환한 것으로 false가 맞다.
console.log(q15) // true? // false

let q16 = 5 <= 5.0 // 정답
console.log(q16) // true

let q17 = 5 >= 5 // 정답
console.log(q17) // true

let q18 = true || true // 정답
console.log(q18) // true

let q19 = true || false // 정답
console.log(q19) // true

let q20 = true && true // 정답
console.log(q20) // true

let q21 = true && false // 정답
console.log(q21) // false

let q22 = !true // 정답
console.log(q22) // false (true가 아니면 false)

let q23 = !false // 정답
console.log(q23) // true