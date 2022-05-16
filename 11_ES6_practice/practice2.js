let names = [
  "Steven Paul Jobs",
  "Bill Gates",
  "Mark Elliot Zuckerberg",
  "Elon Musk",
  "Jeff Bezos",
  "Warren Edward Buffett",
  "Larry Page",
  "Larry Ellison",
  "Tim Cook",
  "Lloyd Blankfein",
];

// map 문제
// 모든 이름을 대문자로 바꾸어서 출력하시오.
// 성을제외한 이름만 출력하시오. (예-[“Steven”,“Bill”,“Mark”,“Elon”…])
// 이름의 이니셜만 출력하시오. (예-[“SPJ”,“BG”,“MEZ”,“EM”…])

// let upUpperCase = names.map((item)=>{console.log(item.toUpperCase(item))})
// // names.map((item)=>{let splitted = item.split(' '); console.log(splitted[0])}) // 더 나은 방식 가능
// let splitted = names.map((item)=>{let splitted = item.split(' ')[0]; console.log(splitted)})
// // names.map((item)=>{let splitted = item.split(' '); let initial = splitted[0]; console.log(initial[0])}) // 오답
// let initialOnly = names.map((item)=>{
//   let splitted = item.split(' ');
//   let initial = "";
//   splitted.forEach((nameItem) => {initial += nameItem[0]})
//   return initial;
//   }
// )
// console.log(initialOnly)

// filter 문제
// 이름에 a를 포함한 사람들을 출력하시오.
// 이름에 같은 글자가 연속해서 들어간 사람을 출력하시오.(예 - tt, ff, ll 이런 글자들)

let aPerson = names.filter(
  (item) => {
    return item.includes('a')
  }
)
console.log(aPerson)

// let consecutiveLettersPerson = names.filter( // 오답
//   (item) => {
//     if (item.split('') == item.split('')+1) {
//     return item.split('')
//     }
//   }
// )

let doubleLetter =  names.filter((item) => {
  let splitName = item.split(""); 
  // 1. 이름부터 분해한다
  return splitName.some((letter, index) => letter == splitName[index + 1]);
  // 2. 분해한 이름에서 letter 인자와 분해한 이름의 +1인덱스와 같은지 비교하고, some 함수를 이용해 true인 값을 모두 return 시킨다
})

console.log(doubleLetter)

// some 문제
// 전체 이름의 길이가 20자 이상인 사람이 있는가?
// 성을 제외한 이름에 p를 포함한 사람이 있는가?(대소문자 상관 no)

// every 문제
// 모두의 전체 이름의 길이가 20자 이상인가?
// 모두의 이름에 a 가 포함되어 있는가?

// find 문제
// 전체 이름의 길이가 20자 이상인 사람을 찾으시오.
// 미들네임이 포함되어있는 사람을 찾으시오.(예-Steven Paul Jobs)

// findIndex 문제
// 전체 이름의 길이가 20자 이상인 사람의 인덱스 번호를 찾으시오.
// 미들네임이 포함되어있는 사람의 인덱스 번호를 찾으시오.