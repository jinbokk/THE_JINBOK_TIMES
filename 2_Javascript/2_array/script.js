let fruit = ["banana", "apple", "grape", "mango"] // 해당 값들을 하나하나 변수로 만들지 않고, 배열하여 묶는다.
console.log(fruit) // fruit 변수의 모든 값을 도출
console.log(fruit[0]) // fruit 변수의 모든 값 중 첫번째 값 ('0부터' 시작하여 자동으로 인덱스가 부여된다)
console.log(fruit[2]) // 2 = 3번째

fruit[0] = "cherry" // 첫번째 값인 banana를 cherry로 재선언
console.log(fruit) // 첫번째 값인 banana가 cherry로 바뀜

//배열과  쓸 수 있는 함수는 다양하다

//1. pop : 마지막 값의 아이템을 뺀다.
fruit.pop()
console.log(fruit)

//2. push : 마지막 값에 아이템을 추가한다.
fruit.push("pineapple")
console.log(fruit)

//3. includes : 배열에 해당 값을 포함하고 있는지 아닌지 true / false
console.log(fruit.includes("pear")) // pear는 없으니 false

//4. indexOf : 해당 값의 인덱스 번호 (몇 번째 였는지)를 알려줌. 
console.log(fruit.indexOf("apple")) // apple은 2번째 였으니 1 값 출력

//5. slice : 값을 하나 혹은 두 개 받을 수 있음. 해당값을 '포함하여' 이전의 값을 잘라준다 (없앤다).
console.log(fruit.slice(2)) // 2번째 부터 하위 값
console.log(fruit.slice(1, 3)) // 'cherry', 'apple', 'grape', 'pineapple' 중, 2'부터' (=3번째 apple) 시작하여 3'이전까지' (3=4번째 pineapple) 잘라낸다.

//6. splice(a,b) : slice와 비슷하나, a(시작점)으로부터 b(갯수)만큼 제거하여 출력
fruit.splice(2, 1)
console.log(fruit)

// slice와 splice 의 차이? > slice는 기존의 배열을 자르지 않는다. 반면에, splice는 기존의 original 이 잘림.
// 즉, 기존 배열을 바꿔야 한다면 splice, 건드리지 않고 특정 값을 도출한다면 slice. 




// 문제. 주어진 배열을 가지고 다음 질문에 코드를 작성하시오
let animals = [
  "Aardvark",
  "Albatross",
  "Alligator",
  "Alpaca",
  "Ant",
  "Ape",
  "Armadillo",
  "Donkey",
  "Baboon",
  "Badger",
  "Barracuda",
  "Bat",
  "Bear",
  "Beaver",
  "Bee",
  "Bison",
  "Cat",
  "Caterpillar",
  "Cattle",
  "Chamois",
  "Cheetah",
  "Chicken",
  "Chimpanzee",
  "Chinchilla",
  "Chough",
  "Clam",
  "Cobra",
  "Cockroach",
  "Cod",
  "Cormorant",
  "Dugong",
  "Dunlin",
  "Eagle",
  "Echidna",
  "Eel",
  "Eland",
  "Elephant",
  "Elk",
  "Emu",
  "Falcon",
  "Ferret",
  "Finch",
  "Fish",
  "Flamingo",
  "Fly",
  "Fox",
  "Frog",
  "Gaur",
  "Gazelle",
  "Gerbil",
  "Giraffe",
  "Grasshopper",
  "Heron",
  "Herring",
  "Hippopotamus",
  "Hornet",
  "Horse",
  "Kangaroo",
  "Kingfisher",
  "Koala",
  "Kookabura",
  "Moose",
  "Narwhal",
  "Newt",
  "Nightingale",
  "Octopus",
  "Okapi",
  "Opossum",
  "Quail",
  "Quelea",
  "Quetzal",
  "Rabbit",
  "Raccoon",
  "Rail",
  "Ram",
  "Rat",
  "Raven",
  "Red deer",
  "Sandpiper",
  "Sardine",
  "Sparrow",
  "Spider",
  "Spoonbill",
  "Squid",
  "Squirrel",
  "Starling",
  "Stingray",
  "Tiger",
  "Toad",
  "Whale",
  "Wildcat",
  "Wolf",
  "Worm",
  "Wren",
  "Yak",
  "Zebra"
]

// q1. array에 마지막 아이템 "Zebra" 제거하기
animals.pop()
console.log(animals)


// q2. 주어진 array에 "Dog" 추가하기
animals.push("Dog")
console.log(animals)


// q3. 주어진 array에 "Mosquito","Mouse","Mule"추가하기
animals.push("Mosquito", "Mouse", "Mule")
console.log(animals)


// q4. 해당 어레이에는 "Human"이 있는가?
// console.indexOf("Human") >> 오답
console.log(animals.includes("Human"))


// q5. 해당 어레이에는 “Cat” 이 있는가?
console.log(animals.includes("Cat"))


// q6. "Red deer"을 "Deer"로 바꾸시오

      //console.log(animals.indexOf("Red deer")) // "Red deer 가 77번 인덱스인 것을 확인하였음"
      //animals[77] = "Deer"
      //console.log(animals)

// 더욱 간단하게 하는 방법이 있었다.

animals[animals.indexOf("Red deer")] = "Deer"
console.log(animals)


// q7. "Spider"부터 3개의 아이템을 기존 어레이에서 제거하시오

      // console.log(animals.indexOf("Spider")) // Spider 가 81번 인덱스인 것을 확인하였음"
      // console.log(animals.slice(81,83)) > 오답. spider와 spoonbill 만 출력되었음. 81(Spider) 부터 83(Squid) 이전까지 잘린 것

      // animals.splice[81,84] // 오답. slice와 헷갈려 갯수가 아닌 인덱스 넘버를 적음
      // console.log(animals.splice[81,84]) // 오답. slice와 헷갈려 갯수가 아닌 인덱스 넘버를 적음

      // console.log(animals.splice[81,3]) // 오답. splice를 위에서 선언하였으니, 출력할 값은 animals 임

      // animals.splice(81,3)

 // 더욱 간단하게 하는 방법이 있었다.

animals.splice(animals.indexOf("Spider"),3)
console.log(animals)


// q8. "Tiger"이후의 값을 제거하시오
    
    //console.log(animals.indexOf("Tiger")) // "Tiger" 가 84번 인덱스인 것을 확인하였음.
    // console.log(animals.slice(84)) // 오답. Slice는 '이전의' 값을 제거하여 보여줌

    // animals.pop(84) // 오답. 해당 인덱스 이후까지도 pop 해주는 줄 알았지만, 마지막 값만 없애줌.
    // console.log(animals) // 오답. 해당 인덱스 이후까지도 pop 해주는 줄 알았지만, 마지막 값만 없애줌.

    //console.log(animals.length) // lenght를 통해 총 인덱스 96까지 있는 것을 확인

    //animals.slice(96,84) // 오답. 마지막부터 tiger까지 슬라이스 하면 될 줄 알았지만 그런식으로 작동하지 않음
    //console.log(animals) // 오답. 마지막부터 tiger까지 슬라이스 하면 될 줄 알았지만 그런식으로 작동하지 않음

    //animals.splice(84,96-84) // 혹시나 하고 연산자도 같이 넣어봤는데 작동함 !

// 더욱 간단하게 하는 방법이 있었으며, 연산자 등 필요 없이 a,b중 a만 입력하여 하위 값을 모두 제거할 수 있었다.
animals.splice(animals.indexOf("Tiger"))
console.log(animals)


// q9. "B"로 시작되는 아이템인 "Baboon"부터 "Bison"까지 가져와 새로운 어레이에 저장하시오

      // console.log(animals.indexOf("Baboon")) // Baboon = 8
      // console.log(animals.indexOf("Bison")) // Bison = 15
      // 문제의 새로운 어레이라고 한다면, 기존 것을 건드리지 않고 새 값을 출력하는 것이니 slice 사용이 맞지 않을까?
      // console.log(animals.slice(8,16)) // slice는 (a,b) 중 b '이전까지' 이므로 15번 인덱스가 아닌 16번 사용하였다.

// 더욱 간단하게 하는 방법이 있었으며, 새로운 어레이에 저장한다는 것은, 새롭게 어레이를 선언해야 하므로 let을 사용했어햐 했다.
let newList = animals.slice(animals.indexOf("Baboon"),animals.indexOf("Bison")+1)
console.log(newList)