window.addEventListener('DOMContentLoaded', (event) => {
    salaryOutput();
    validateName();
    validateDate();
  });
  
  
  function salaryOutput() {
  const output = document.querySelector(".salary-output");
  const salary = document.querySelector("#salary");
  salary.addEventListener("input", function () {
    output.textContent = salary.value;
  });
  
  }
  
  function validateName() {
  
    let name = document.querySelector('#name');
    let textError = document.querySelector('.text-error');
    name.addEventListener('input', function () {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if (nameRegex.test(name.value)) {
            textError.textContent = "";
        } else {
            textError.textContent = "Name is incorrect";
        }
    });
  }
  
  function validateDate() {
    let day = document.querySelector('#day');
    let month = document.querySelector('#month');
    let year = document.querySelector('#year');
    day.addEventListener('input', checkDate);
    month.addEventListener('input', checkDate);
    year.addEventListener('input', checkDate);
  }
  
  function checkDate() {
    let dateError = document.querySelector('.date-error');
    let date = day.value + " " + month.value + " " + year.value;
    try {
        checkStartDate(new Date(Date.parse(date)));
        dateError.textContent = "";
    } catch (e) {
        dateError.textContent = e;
    }
  
  }
  function checkStartDate(startDate) {
    let currentDate = new Date();
    if (startDate > currentDate) {
        throw "Start date is a future date"
    }
    let difference = Math.abs(currentDate.getTime() - startDate.getTime());
    let date = difference / (1000 * 60 * 60 * 24);
    if (date > 30) {
        throw "Start date is beyond 30 days";
    }
  }