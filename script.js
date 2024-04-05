let upperCaseSet = "ABCDEFGHIJKLMNOPQUSTUVWXYZ";
let lowerCaseSet = "abcdefghijklmnopqustuvwxyz";
let numberSet = "1234567890";
let symbolSet = "!@#$%^&*_-+'";

let passBox = document.getElementById("pass-box");
let totalChar = document.getElementById("total-char");
let upperCase = document.getElementById("upper-case");
let lowerCase = document.getElementById("lower-case");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");

let getRandomData = (dataset) => {
  return dataset[Math.floor(Math.random() * dataset.length)];
};

let generatePassword = (password = "") => {
  if (totalChar.value < 3) {
    passBox.innerText = "Minimum length must be 3";
    return;
  }
  if (upperCase.checked) {
    password += getRandomData(upperCaseSet);
  }
  if (lowerCase.checked) {
    password += getRandomData(lowerCaseSet);
  }
  if (numbers.checked) {
    password += getRandomData(numberSet);
  }
  if (symbols.checked) {
    password += getRandomData(symbolSet);
  }

  if (password.length < totalChar.value) {
    return generatePassword(password);
  }
  passBox.innerText = truncatedString(password, totalChar.value);
};

document.getElementById("btn").addEventListener("click", () => {
  generatePassword();
});

function truncatedString(str, num) {
  if (str.length > num) {
    let subStr = str.substring(0, num);
    return subStr;
  } else return str;
}
