const inputBox = document.querySelector(".input-box");
const submitButton = document.querySelector(".submit-btn");
const output = document.querySelector(".output");

function letterCounter(str) {
  const lettersCount = str.split("").filter((c) => c != " ").length;
  return lettersCount;
}

function wordCounter(str) {
  const wordsCount = str.split("").filter((word) => word !== "").length;
  return wordsCount;
}

function checkCount() {
  const inputText = inputBox.value;
  const letterCount = letterCounter(inputText);
  output.innerText = `letters: ${letterCount}`;
}

submitButton.addEventListener("click", checkCount);
