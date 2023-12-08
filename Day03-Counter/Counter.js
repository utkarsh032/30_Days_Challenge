let result = document.querySelector(".counter-result");
let counter = 0;

let dec = document.querySelector(".decrement-btn");
let res = document.querySelector(".reset-btn");
let inc = document.querySelector(".increment-btn");

dec.addEventListener("click", () => {
  counter--;
  result.textContent = counter;

  if (counter < 0) {
    result.style.color = "red";
  }
});

res.addEventListener("click", () => {
  counter = 0;
  result.textContent = counter;

});

inc.addEventListener("click", () => {
  counter++;
  result.textContent = counter;

  if (counter > 0) {
    result.style.color = "white";
  }
});
