const form = document.getElementById('loginForm');
const gmailInput = document.getElementById('gmail');
const nameInput = document.getElementById('name');

const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
const nameRegex = /^[a-zA-Z ]+$/;

form.addEventListener('submit', function(event) {
  event.preventDefault();
  let hasError = false;

  const invalidFeedbacks = document.querySelectorAll('.invalid-feedback');
  invalidFeedbacks.forEach(feedback => feedback.remove());
  gmailInput.classList.remove('is-invalid');
  nameInput.classList.remove('is-invalid');

  if (gmailInput.value.trim() === '' || !gmailRegex.test(gmailInput.value)) {
    gmailInput.classList.add('is-invalid');
    const errorDiv = document.createElement('div');
    errorDiv.className = 'invalid-feedback';
    errorDiv.textContent = gmailInput.value.trim() === '' 
      ? 'Gmail cannot be empty' 
      : 'Please enter a valid Gmail address';
    gmailInput.parentElement.appendChild(errorDiv);
    hasError = true;
  }

  if (nameInput.value.trim() === '' || !nameRegex.test(nameInput.value)) {
    nameInput.classList.add('is-invalid');
    const errorDiv = document.createElement('div');
    errorDiv.className = 'invalid-feedback';
    errorDiv.textContent = nameInput.value.trim() === ''
      ? 'Name cannot be empty'
      : 'Name must contain only alphabetic characters';
    nameInput.parentElement.appendChild(errorDiv);
    hasError = true;
  }

  if (!hasError) {
    window.location.href = 'Secondpage.html';
  }
});