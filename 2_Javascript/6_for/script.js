for (let i1 = 1; i1 <= 10; i1++) {
  console.log("Countdown", i1)
} // i1++ 는 i1+1 의 준말이다 // '프린트 >> 증감 >> 조건확인' loop


// 짝수만 고를 경우

// 다양한 방법이 있지만,
// 대표적인 방법 1

for (let i2 = 1; i2 <= 10; i2++) {
  if (i2 % 2 == 0)
    console.log("Countdown", i2)
}

// 대표적인 방법 2

for (let i3 = 0; i3 <= 10; i3 += 2) {
  console.log("Countdown", i3)
} // 'i3+=2' 는, i3 + 2 라는 뜻. 즉, i3++ == i3+=1

// 최적화 면에서는 (계산 시간) 방법 2가 더 유리하지만, 상황에 따라 방법 1을 써야할 때도 있는 등 다양하다 !



// for문은 이중으로도 구성이 가능하다!
// 이중 for문 ... 머리 지진 남!



// 구구단 만들기

for (let 구구단a = 2; 구구단a <= 9; 구구단a++) {
  for (let 구구단b = 1; 구구단b <= 9; 구구단b++) {
    console.log(구구단a + '*' + 구구단b + '=' + 구구단a * 구구단b)
  }
}

// for loop의 경우 최대 2중으로 생각한다! 3중으로 넘어가는 순간 연산이 기하급수적으로 늘어나게 되기 때문!

// for loop와 배열(array)을 조합하여 많이 쓰인다.

let fruit = ["banana", "apple", "grape", "mango"]
for (let 배열 = 0; 배열 < fruit.length; 배열++)
  console.log(fruit[배열])



// test

// q1. 1부터 100까지 더하는 for문을 만들고 결과를 출력하시오.

for (let q1 = 1; q1 <= 100; q1++)
  console.log(q1)

// q2. 1부터 100까지 홀수만 출력하자.

for (let q2 = 1; q2 <= 100; q2 += 2)
  console.log(q2)

// q3. 1부터 50까지 369결과를 프린트하자.

// 3,6,9의 각각 배수?... || 연산자를 써야하나? >> 3,6,9 로 나누었을때 나머지가 0인 숫자를 골라내면 되겠다. % 연산자.

//for (let q3_a = 1; q3_a <= 50; q3_a++) {
//  if (q3_a % 3 == 0 || q3_a % 6 == 0 || q3_a % 9 == 0)
//    console.log(q3_a + " 짝!") // 1의 자릿수가 3,6,9일시
//  else {
//    console.log(q3_a)
//  }
//}
// 오답 / 첫재짜리 3의 경우를 구현을 못하였음 33=짝짝

for (let q3_a = 1; q3_a <= 50; q3_a++) {
  let stringValue = q3_a.toString()
  let result = ""
  for (let q3_b = 0; q3_b < stringValue.length; q3_b++) {
    if (stringValue[q3_b] === "3" || stringValue[q3_b] === "6" || stringValue[q3_b] === "9") {
      result += "짝"
    }
  }
  console.log(result.length > 0 ? result : q3_a)
}


// q4. 주어진 숫자가 소수이면 true 아니면 false를 출력하는 프로그램을 짜시오.

let n = 11
let isPrime = true

if (n === 1) { // 1은 소수가 아님 
  isPrime = false
}
for (let i = 2; i < n; i++) {
  if (n % i == 0) {
    isPrime = false
  }
}
console.log(isPrime)