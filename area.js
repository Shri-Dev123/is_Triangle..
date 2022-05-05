const areaInput = document.querySelectorAll(".input");
const areaButton = document.querySelector(".check-area");
const areaOutput = document.querySelector(".hypotenuse-output");

function calculateArea(event) {
  let area = 0.5 * areaInput[0].value * areaInput[1].value;

  event.preventDefault();
  areaOutput.innerText = `The area of the triangle is ${area} cm²`;
}

areaButton.addEventListener("click", calculateArea);
