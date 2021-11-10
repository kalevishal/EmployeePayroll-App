window.addEventListener('DOMContentLoaded', (event) => {
    salaryOutput();
  
  });
  
  
  function salaryOutput() {
  const output = document.querySelector(".salary-output");
  const salary = document.querySelector("#salary");
  salary.addEventListener("input", function () {
    output.textContent = salary.value;
  });
  
  }