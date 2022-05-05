const quizForm = document.querySelector("#quiz-form");
const submitButton = document.querySelector("#submit-form");
const quizOutput = document.querySelector("#output");
const correctAnswers = ["90°", "right angled"];

function calculateScore(event) {
  let score = 0;
  let index = 0;
  const userDatas = new FormData(quizForm);
  for (let userData of userDatas.values()) {
    if (userData === correctAnswers[index]) {
      score = score + 1;
    }
    index = index + 1;
  }
  quizOutput.innerText = `Your score is ${score}`;
  event.preventDefault();
}
console.log(submitButton);

submitButton.addEventListener("click", calculateScore);
