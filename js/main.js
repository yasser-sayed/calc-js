var removerBtn = document.querySelector(".clearer");
var equalBtn = document.querySelector(".equal");
var btns = document.querySelectorAll(".num");
var myInput = document.querySelector("input");

btns.forEach((btn) => {
  btn.addEventListener("click", (btnIn) => {
    myInput.value += btnIn.target.innerText;
  });
});

removerBtn.addEventListener("click", (rem) => {
  myInput.value = "";
});

equalBtn.addEventListener("click", () => {
  if (myInput.value != "") {
    myInput.value = eval(myInput.value);
  }
});
