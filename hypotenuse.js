const input = document.querySelectorAll(".input");
const hypotenuseButton = document.querySelector("#check-hypotenuse-btn");
const hypotenuseOutput = document.querySelector(".hypotenuse-output");

function calculateHypotenuse(event) {
  let squaredSumOfNum = input[0].value ** 2 + input[1].value ** 2;
  let calculatedHypotenuse = Math.sqrt(Number(squaredSumOfNum));
  event.preventDefault();
  hypotenuseOutput.innerText = `The length of the hypotenuse is ${calculatedHypotenuse}`;
}

hypotenuseButton.addEventListener("click", calculateHypotenuse);
