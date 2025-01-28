let formDataArray = [];
const form = document.getElementById('registrationForm');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    addData();
    form.reset(); 
});
function addData() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const phone = document.getElementById('phone').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    
    const subjects = [];
    document.querySelectorAll('.subject:checked').forEach(checkbox => {
        subjects.push(checkbox.id);
    });
    
    const dob = document.getElementById('dob').value;
    const location = document.getElementById('location').value;    
    const formData = {
        name,
        age,
        phone,
        gender,
        subjects: subjects.join(', '),
        dob,
        location
    };
    formDataArray.push(formData);
    updateTable();
}

function updateTable() {
    const tbody = document.querySelector('#dataTable tbody');
    tbody.innerHTML = '';

    formDataArray.forEach((data, index) => {
        const row = tbody.insertRow();
        
        const nameCell = row.insertCell(0);
        const ageCell = row.insertCell(1);
        const phoneCell = row.insertCell(2);
        const genderCell = row.insertCell(3);
        const subjectsCell = row.insertCell(4);
        const dobCell = row.insertCell(5);
        const locationCell = row.insertCell(6);
        const actionCell = row.insertCell(7);

        nameCell.textContent = data.name;
        ageCell.textContent = data.age;
        phoneCell.textContent = data.phone;
        genderCell.textContent = data.gender;
        subjectsCell.textContent = data.subjects;
        dobCell.textContent = data.dob;
        locationCell.textContent = data.location;




        const updateButton = document.createElement('button');
        updateButton.textContent = 'Update'; 
        updateButton.className = 'update-btn';
        updateButton.onclick = function() {
            updateData(index); 
        };

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-btn';
        deleteButton.onclick = function() {
            deleteData(index);
        };

        actionCell.appendChild(updateButton);
        actionCell.appendChild(deleteButton);
    });
}
function updateData(index) {
    const data = formDataArray[index];
    document.getElementById('name').value = data.name;
    document.getElementById('age').value = data.age;
    document.getElementById('phone').value = data.phone;
    document.querySelector(`input[name="gender"][value="${data.gender}"]`).checked = true;
    const subjectArray = data.subjects.split(', ');
    document.querySelectorAll('.subject').forEach(checkbox => {
        checkbox.checked = subjectArray.includes(checkbox.id);
    });
    document.getElementById('dob').value = data.dob;
    document.getElementById('location').value = data.location;
    formDataArray.splice(index, 1); 
    updateTable(); 
}
function deleteData(index) {
    if (confirm('Are you sure you want to delete this record?')) {
        formDataArray.splice(index, 1);
        updateTable();
    }
}


// function validate(data){
//     let pattern = /^[a-zA-Z \s]+$/;
//     let nameErr = document.getElementById('err-name');

//     let res = pattern.test(data);
//     if(!res){
//         nameErr.classList.remove('hide');
//     }
// }

// console.log(validate("kartgi90"));

function validateName(data) {
    let pattern = /^[a-zA-Z \s]+$/;
    let nameErr = document.getElementById('name-error');
    let res = pattern.test(data);
    if (!res) {
        nameErr.classList.remove('hide');
        nameErr.textContent = "Name should contain only letters and spaces";
        return false;
    }
    nameErr.classList.add('hide');
    return true;
}

function validateAge(data) {
    let pattern = /^\d+$/;
    let ageErr = document.getElementById('age-error');
    let res = pattern.test(data);
    if (!res || data < 18 || data > 100) {
        ageErr.classList.remove('hide');
        ageErr.textContent = "Age must be between 18 and 100";
        return false;
    }
    ageErr.classList.add('hide');
    return true;
}

function validatePhone(data) {
    let pattern = /^\d{10}$/;
    let phoneErr = document.getElementById('phone-error');
    let res = pattern.test(data);
    if (!res) {
        phoneErr.classList.remove('hide');
        phoneErr.textContent = "Phone number should be 10 digits";
        return false;
    }
    phoneErr.classList.add('hide');
    return true;
}

function validateGender() {
    let genderErr = document.getElementById('gender-error');
    let selectedGender = document.querySelector('input[name="gender"]:checked');
    if (!selectedGender) {
        genderErr.classList.remove('hide');
        genderErr.textContent = "Please select a gender";
        return false;
    }
    genderErr.classList.add('hide');
    return true;
}

function validateSubjects() {
    let subjectsErr = document.getElementById('subjects-error');
    let selectedSubjects = document.querySelectorAll('.subject:checked');
    if (selectedSubjects.length === 0) {
        subjectsErr.classList.remove('hide');
        subjectsErr.textContent = "Please select at least one subject";
        return false;
    }
    subjectsErr.classList.add('hide');
    return true;
}

function validateLocation() {
    let locationErr = document.getElementById('location-error');
    let location = document.getElementById('location').value;
    if (!location) {
        locationErr.classList.remove('hide');
        locationErr.textContent = "Please select a location";
        return false;
    }
    locationErr.classList.add('hide');
    return true;
}

document.getElementById('name').addEventListener('input', function(e) {
    validateName(e.target.value);
});

document.getElementById('age').addEventListener('input', function(e) {
    validateAge(e.target.value);
});

document.getElementById('phone').addEventListener('input', function(e) {
    validatePhone(e.target.value);
});

document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let phone = document.getElementById('phone').value;
    
    let isNameValid = validateName(name);
    let isAgeValid = validateAge(age);
    let isPhoneValid = validatePhone(phone);
    let isGenderValid = validateGender();
    let isSubjectsValid = validateSubjects();
    let isLocationValid = validateLocation();
    
    if (isNameValid && isAgeValid && isPhoneValid && 
        isGenderValid && isSubjectsValid && isLocationValid) {
        addData();
        this.reset();
    }
});
function createErrorElements() {
    const fields = ['name', 'age', 'phone', 'gender', 'subjects', 'location'];
    fields.forEach(field => {
        const element = document.getElementById(field) || 
                       document.querySelector(`.${field}`) ||
                       document.querySelector(`[name="${field}"]`);
        if (element) {
            const errorDiv = document.createElement('div');
            errorDiv.id = `${field}-error`;
            errorDiv.className = 'error-message hide';
            element.parentNode.insertBefore(errorDiv, element.nextSibling);
        }
    });
}

document.addEventListener('DOMContentLoaded', createErrorElements);