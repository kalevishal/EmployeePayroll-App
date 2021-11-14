let empPayrollList;
window.addEventListener('DOMContentLoaded', (event) => {
   empPayrollList=getEmployeeDataFromStorage();
   createInnerHtml();
   document.querySelector(".emp-count").textContent= empPayrollList.length;
  });

  const getEmployeeDataFromStorage = () => {
      return localStorage.getItem("EmployeePayrollList") ?
      JSON.parse(localStorage.getItem("EmployeePayrollList")) : [] ;
  }
  
  let createInnerHtml = () => {
   
    let headerHTML="<tr> <th> </th><th>Name</th> <th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th></tr>";
    let innerHTML = `${headerHTML}`;
 
    for (const employeePayrollData of empPayrollList) {
     innerHTML = `${innerHTML}
   
<tr><td>
    <img class="profile" src="${employeePayrollData._profilePic}">
    </td>
    <td>${employeePayrollData._name}</td>
    <td>${employeePayrollData._gender}</td>
    <td>
        ${getDeptHtml(employeePayrollData._department)}
    </td>
    <td>${employeePayrollData._salary}</td>
    <td>${employeePayrollData._startDate}</td>
    <td>
        <img alt="delete" src="../assets/icons/delete-black-18dp.svg">
        <img alt="edit" src="../assets/icons/create-black-18dp.svg">
    </td>
</tr> `;
    }
     document.querySelector('#display').innerHTML = innerHTML;
  }

  const getDeptHtml = (deptList) => {
      let deptHtml= '';
      for (const dept of deptList) {
          deptHtml=`${deptHtml} <div class = 'dept-label'>${dept}</div>`
      }
     return deptHtml;
  }




const createEmployeePayrollJSON = () => {
  let empPayrollDB = [

      {
          "_id": 1,
          "_name": "Vishh",
          "_gender": "male",
          "_department": [
              "Finance"
          ],
          "_salary": "300000",
          "_startDate": "1 Oct 2021",
          "_note": "Hello everyone",
          "_profilePic": "../assets/profile-images/Ellipse -3.png"
      },
      {
          "_id": 3,
          "_name": "Pranay",
          "_gender": "male",
          "_department": [
              "HR",
              "Sales"
          ],
          "_salary": "750000",
          "_startDate": "5 Oct 2020",
          "_note": "",
          "_profilePic": "../assets/profile-images/Ellipse -2.png",
          
      }

  ];
  return empPayrollDB;
}