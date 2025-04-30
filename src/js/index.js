document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const input = document.querySelector("input[type='text']");
  const resultDiv = document.getElementById("result");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const inputValue = input.value;
    resultDiv.textContent = `You entered: ${inputValue}`;
  });
}
);