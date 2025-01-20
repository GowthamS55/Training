// document.getElementById('registrationForm').addEventListener('submit', function (event) {
//     event.preventDefault();
  
//     // Get form field values
//     const name = document.getElementById('name').value;
//     const age = document.getElementById('age').value;
//     const phone = document.getElementById('phone').value;
//     const gender = document.querySelector('input[name="gender"]:checked').value;
//     const subjects = [];
//     document.querySelectorAll('.subject:checked').forEach(function (checkbox) {
//       subjects.push(checkbox.nextElementSibling.textContent); // Get the subject name from label
//     });
//     const dob = document.getElementById('dob').value;
//     const location = document.getElementById('location').value;
  
//     // Create a new row in the table
//     const table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
//     const newRow = table.insertRow();
  
//     // Insert new cells and fill them with the form data
//     newRow.insertCell(0).textContent = name;
//     newRow.insertCell(1).textContent = age;
//     newRow.insertCell(2).textContent = phone;
//     newRow.insertCell(3).textContent = gender;
//     newRow.insertCell(4).textContent = subjects.join(', '); // Join subjects if multiple selected
//     newRow.insertCell(5).textContent = dob;
//     newRow.insertCell(6).textContent = location;
  
//     // Optionally, clear the form fields
//     document.getElementById('registrationForm').reset();
//   });
