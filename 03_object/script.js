let patient = {
  name: "jinbok",
  age: 29,
  disease: "cold"
}
// 객체는 중괄호 {} ! 배열의 대괄호와 헷갈리면 안된다! []
// name,age,disease.. = 키값 (key)
// jinbok,29,cold.. = 값 (value) 

console.log(patient) // patient 의 모든 정보

console.log(patient.name)
console.log(patient.age)
console.log(patient.disease)

console.log(patient["age"]) // 위의 표현방식과 같다. 문법은 2개이고, 각각 쓰임이 있음! / . 방식과 []방식

patient.name = "jb" // 이름이 바뀌었을 때
console.log(patient)

patient.age = "25" // 나이도 바뀌었을 때
console.log(patient)

let patientList = [{
  name: "a",
  age: 20
}, {
  name: "b",
  age: 25
}, {
  name: "c",
  age: 30
}]
console.log(patientList)
console.log("첫번째 환자는:", patientList[0])
console.log("첫번째 환자의 나이는:",patientList[0].age) // 쉼표 아니고 마침표 (dot) 임!
console.log("첫번째 환자의 나이는:",patientList[0]["age"]) // 위와 같은 값이지만 다른 문법이다.

console.log("두번째 환자의 나이는:",patientList[1].name)