const inputBox = document.querySelector(".input-box");
const submitButton = document.querySelector(".submit-btn");
const outputLetterCount = document.querySelector(".output1");
const outputWordCount = document.querySelector(".output2");
const outputSentenceCount = document.querySelector(".output3");
const outputParaCount = document.querySelector(".output4");

function letterCounter(str) {
  const lettersCount = str.split("").filter((c) => c != " ").length;
  return lettersCount;
}

function wordCounter(str) {
  const wordsCount = str.split(" ").length;
  return wordsCount;
}
// console.log(wordCounter(" hello how do you do"));

function sentenceCounter(str) {
  const sentencesCount = str.split(/[.|!|?]+/g).length - 1;
  return sentencesCount;
}
// console.log(sentenceCounter("hello. how are you? i am nilesh."));

function paraCounter(str) {
  const parasCount = str.replace(/\n$/gm, "").split(/\n/).length;
  return parasCount;
}

function checkCount() {
  // console.clear();
  const inputText = inputBox.value;

  if (inputText === "") {
    outputLetterCount.innerText = `Letters count: 0`;
    outputWordCount.innerText = `Words count: 0`;
    outputSentenceCount.innerText = `Sentences count: 0`;
    outputParaCount.innerText = `Paragraphs count: 0`;
    console.log("1st cond");
  } else {
    console.log("2nd cond");
    const letterCount = letterCounter(inputText);
    outputLetterCount.innerText = `Letters count: ${letterCount}`;

    const wordCount = wordCounter(inputText);
    outputWordCount.innerText = `Words count: ${wordCount}`;

    const sentenceCount = sentenceCounter(inputText);
    outputSentenceCount.innerText = `Sentences count: ${sentenceCount}`;

    const paraCount = paraCounter(inputText);
    outputParaCount.innerText = `Paragraphs count: ${paraCount}`;
  }
}

submitButton.addEventListener("click", checkCount);
