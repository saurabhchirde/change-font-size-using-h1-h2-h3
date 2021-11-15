const str = document.querySelector(".str");
const btnH1 = document.querySelector(".btnH1");
const btnH2 = document.querySelector(".btnH2");
const btnH3 = document.querySelector(".btnH3");
const output = document.querySelector(".output");

btnH1.addEventListener("click", function () {
  const input = str.value;
  if (input !== "") {
    output.classList.add("h1");
    output.classList.remove("h2");
    output.classList.remove("h3");
    output.innerText = input;
  } else {
    output.innerText = "Enter valid text";
  }
});
btnH2.addEventListener("click", () => {
  const input = str.value;
  if (input !== "") {
    output.classList.remove("h1");
    output.classList.remove("h3");
    output.classList.add("h2");
    output.innerText = input;
  } else {
    output.innerText = "Enter valid text";
  }
});
btnH3.addEventListener("click", () => {
  const input = str.value;
  if (input !== "") {
    output.classList.remove("h1");
    output.classList.remove("h2");
    output.classList.add("h3");
    output.innerText = input;
  } else {
    output.innerText = "Enter valid text";
  }
});
