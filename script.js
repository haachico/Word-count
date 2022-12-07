const inputBox = document.querySelector(".input-box");
const submitButton = document.querySelector(".submit-btn");
const output = document.querySelector(".output");

function letterCounter(str) {
  const lettersCount = str.replace(/\s+/g, "").length;
  return lettersCount;
}

function wordCounter(str) {
  const wordsCount = str.split("").filter((word) => word !== "").length;
  return wordsCount;
}

function checkCount() {
  const letterCount = letterCounter();
  console.log(letterCount);
  output.innerText = `letters: ${letterCount}`;
}

submitButton.addEventListener("click", checkCount);
