// let userName = prompt("Как вас зовут?");
// let userSurname = prompt("Ваша фамилия?");
// let userAge = prompt("Сколько вам лет?");

// alert(userName);
// alert(userSurname);
// alert(userAge);

// let userPersonalInfo = {
//   name: userName,
//   surname: userSurname,
//   age: userAge
// };

// console.log(userPersonalInfo);

// CYCLE HOMEWORK

// FIRST TASK

// let i = prompt("Введите число");
// let n = 0;

// while (n++ < i) {
//   if (Number.isInteger(n / 4)) continue;
// else {
//     console.log(n)
//   }
// }

// SECOND TASK

// let i = prompt("Введите число");
// let n = 1;

// while(i) n *= (i--);
// console.log(n);

// THIRD TASK

// let i = prompt("Введите число");
// let n = prompt("Введите степень");
// let result = (Math.pow(i, n));

// i, n = Number(i, n);

// for (i, n; ; result) {
//   console.log(result)
//   break;
// }

// TEST

// if (isNaN(i, n)) {
//   alert("Недопустимые символы")
// }
// if (i,n == "") {
//   alert("Empty")
// }
// if (i,n < 0) {
//   alert("Значение не может быть отрицательным")
// }

// FOURTH TASK

// let rand = Math.floor(1 + Math.random() * 10);
// console.log(rand);

// while (true) {
//   let i = +prompt("Введите число");
//   if  (i === rand) {
//   alert("Угадал!")
//   break;
// }
// }

// FUNCTION HOMEWORK

// FIRST TASK

// function ageVerification() {
//   let age = prompt("Введите свой возраст");
//   if (+age < 18) {
//     alert("Вам меньше 18 лет!");
//     ageVerification();
//   } else {
//     alert("Проверка пройдена!");
//   }
// };
// ageVerification();

// SECOND TASK

// function add(a, b) {
//   return a + b;
// }

// function subtract(a, b) {
//   return a - b;
// }

// function divide(a, b) {
//   return a / b;
// }

// function multiply(a, b) {
//   return a * b;
// }

// THIRD TASK

// function addCreator(a) {
//   return (b) => {
//     return a + b
//   }
// }

// console.log(addCreator(1)(3))

// const add = addCreator(5)
// console.log(add(5));



// FOURTH TASK

// function counterCreater(step=2) {
//   let index = 0;

//   return function counter() {
//     index += step; return index;
//   };
// }

// let myCounter1 = counterCreater(-1);
// console.log(myCounter1());
// console.log(myCounter1());

// let myCounter2 = counterCreater(4);
// console.log(myCounter2());
// console.log(myCounter2());

// let myCounter3 = counterCreater(2);
// console.log(myCounter3());
// console.log(myCounter3());


// ARRAY HOMEWORK
let index = 10;

function counterCreater(step) {
  return function counter() {
    index += step;
    return index;
  };
}

let myCounter = counterCreater(-1)

function log(value) {
  console.log(value);
}
let interval = setInterval(function () {
  log(myCounter() + " " + "Ожидание...");
  if (index === 0) {
        clearInterval(interval)
      }
}, 1000);

// developers - авторя ЯП
// name - имя автора
// work - род деятельности автора
const developers = [{
    index: 0,
    name: "Брендан Эйх",
    work: "специалист в области информатики, программист, технический директор"
  },
  {
    index: 2,
    name: "Джеймс Гослинг",
    work: "специалист в области информационных технологий"
  },
  {
    index: 3,
    name: "Бьёрн Страуструп",
    work: "программист"
  }
]

let brandon = developers.filter(item => item.name === "Брендан Эйх")

brandon = {};
[brandon.index, brandon.name, brandon.work] = ["0", "Брендан Эйх", "специалист в области информатики, программист, технический директор"];
console.log(brandon.name)


// data - ЯП про которые должны быть рассказы
// name - название ЯП
// year - год выпуска ЯП
// filenameExtensions -расширения файлов
// influencedBy - ЯП оказавшие влияние
// affectedBy - ЯП испытавшие влияние ЯП
// developerIndex - уникальный идентификатор автора языка программирования
const data = [{
    name: "JavaScript",
    year: 1995,
    filenameExtensions: "js, mjs",
    influencedBy: ["AWK", "C", "HyperTalk", "Java", "Lua", "Perl", "Python", "Scheme", "Self"],
    affectedBy: ["ActionScript", "AtScript", "CoffeeScript", "Dart", "JScript .NET", "LiveScript", "Objective-J", "Opa", "QML", "Raku", "TypeScript"],
    developerIndex: 0,
  },
  {
    name: "Java",
    year: 1995,
    filenameExtensions: "java, class, jar, jad, jmod",
    influencedBy: ["C++", "Си", "Ада", "Simula 67", "Smalltalk", "Objective-C", "Object Pascal", "Оберон", "Eiffel", "Модула-3", "Mesa", "Симула", "C#", "UCSD Pascal"],
    affectedBy: ["Ada 2005", "BeanShell", "C#", "Chapel", "Clojure", "ECMAScript", "Fantom", "Gambas", "Groovy", "Hack", "Haxe", "J#", "Kotlin", "PHP", "Python", "Scala", "Seed7", "Vala"],
    developerIndex: 2,
  },
  {
    name: "C++",
    year: 1983,
    filenameExtensions: "cc, cpp, cxx, c, c++, h, hpp, hh, hxx, h++",
    influencedBy: ["C++", "Си", "Ада", "Simula 67", "Smalltalk", "Objective-C", "Object Pascal", "Оберон", "Eiffel", "Модула-3", "Mesa", "Симула", "C#", "UCSD Pascal"],
    affectedBy: ["Ada", "C", "Modula-2", "Simula"],
    developerIndex: 3,
  },
];