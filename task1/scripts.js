document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    if (email.trim() === '') {
      alert('Please enter an email address.');
      return;
    }
  
    if (password.trim() === '') {
      alert('Please enter a password.');
      return;
    }
  
    // If all inputs are valid, you can proceed with the form submission or further processing.
    alert('Form submitted successfully!');
  });