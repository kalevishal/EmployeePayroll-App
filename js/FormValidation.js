window.addEventListener('DOMContentLoaded', (event) => {
  const name = document.querySelector('#name');
  const textError = document.querySelector('.text-error');
  name.addEventListener('input', function() {
     if ( name.value.length == 0) {
        textError.textContent = "";
        return;
     }
     try {
        (new PersonInfo()).name = name.value;
        textError.textContent = "";
     } catch (e) {
        textError.textContent = e;
     }
  });

  const salary = document.querySelector('#salary');
  const output = document.querySelector('.salary-output');
  output.textContent = salary.value;
  salary.addEventListener('input', function() {
     output.textContent = salary.value;
  });

  var d = new Date();
 
  d.setHours(0);
  d.setMinutes(0);
  d.setSeconds(0);
 
  var userMonth = parseInt(document.getElementById("month").value); 
  var userDay = parseInt(document.querySelector("#day").value);
  var userYear = parseInt(document.querySelector("#year").value); 
  var selectedDate = new Date(userYear, userMonth, userDay);

  if(selectedDate.getTime() >= d.getDate()){ 
     alert("Sorry,This is future Date ");
  }
  else { 
     (new PersonInfo()).start_date = selectedDate.value;        
  }
});