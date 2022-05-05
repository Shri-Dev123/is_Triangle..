const angleInput = document.querySelectorAll(".input");
const isTriangleButton = document.querySelector("#submit-button");
const output = document.querySelector(".output");

function isTriangle(e) {
  if (
    Number(angleInput[0].value) +
      Number(angleInput[1].value) +
      Number(angleInput[2].value) ===
    180
  ) {
    output.innerText = "Yayy..! these angles form a triangle.";
  } else {
    output.innerText = "Oops..! these angles does not form a triangle";
  }
  e.preventDefault();
}

isTriangleButton.addEventListener("click", isTriangle);
