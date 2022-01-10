const str = document.querySelector(".str");
const btnH1 = document.querySelector(".btnH1");
const btnH2 = document.querySelector(".btnH2");
const btnH3 = document.querySelector(".btnH3");
const output = document.querySelector(".output");

btnH1.addEventListener("click", () => {
  const input = str.value;
  input !== ""
    ? (output.innerHTML = "<h1>" + input + "</h1>")
    : (output.innerText = "Enter some text");
});

btnH2.addEventListener("click", () => {
  const input = str.value;
  input !== ""
    ? (output.innerHTML = "<h2>" + input + "</h2>")
    : (output.innerText = "Enter some text");
});

btnH3.addEventListener("click", () => {
  const input = str.value;
  input !== ""
    ? (output.innerHTML = "<h3>" + input + "</h3>")
    : (output.innerText = "Enter some text");
});
