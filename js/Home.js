window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
   });
   
   let createInnerHtml = () => {
    
     let headerHTML="<tr> <th> </th><th>Name</th> <th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th></tr>";
 
     let innerHTML = `${headerHTML}
    
 <tr><td>
     <img class="profile" src="../assets/profile-images/Ellipse -2.png">
     </td>
     <td> Vishal Kale </td>
     <td>Male</td>
     <td>
         <div class="dept-label">Engineer</div>
         <div class="dept-label">Other</div>
     </td>
     <td>750000</td>
     <td>1 Nov 2021</td>
     <td>
         <img alt="delete" src="../assets/icons/delete-black-18dp.svg">
         <img alt="edit" src="../assets/icons/create-black-18dp.svg">
     </td>
 </tr>`;
 document.querySelector("#display").innerHTML = innerHTML;
   }