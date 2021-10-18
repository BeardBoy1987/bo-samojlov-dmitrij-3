let userName = prompt("Как вас зовут?");
let userSurname = prompt("Ваша фамилия?");
let userAge = prompt("Сколько вам лет?");

alert(userName);
alert(userSurname);
alert(userAge);

let userPersonalInfo = {
  name: userName,
  surname: userSurname,
  age: userAge
};

console.log(userPersonalInfo);
