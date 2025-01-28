document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Reset previous errors
    document.getElementById('gameNameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    
    // Get input values
    const gameName = document.getElementById('gameName').value.trim();
    const email = document.getElementById('email').value.trim();
    
    // Validation flags
    let isValid = true;
    
    // Game Name Validation
    if (gameName === '') {
        document.getElementById('gameNameError').textContent = 'Game Name is required';
        isValid = false;
    } else if (gameName.length < 3) {
        document.getElementById('gameNameError').textContent = 'Game Name must be at least 3 characters';
        isValid = false;
    }
    
    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        document.getElementById('emailError').textContent = 'Email is required';
        isValid = false;
    } else if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = 'Invalid email format';
        isValid = false;
    }
    
    // If validation passes
    if (isValid) {
        // Store user details in local storage
        localStorage.setItem('gameName', gameName);
        localStorage.setItem('email', email);
        
        // Redirect or proceed to next page (you can modify this)
        alert('Login Successful! Proceeding to game...');
        // window.location.href = 'game.html'; // Uncomment and modify as needed
    }
});
