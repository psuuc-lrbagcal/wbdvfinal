   // JavaScript code for login functionality
   document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

  // Get the entered username and password
  var email = document.getElementById('emailInput').value;
  var password = document.getElementById('passwordInput').value;
  // Check if the entered username and password are correct
  if (email === 'jcreyes' && password === 'password') {
    alert('Login successful!');
    window.location.assign('dashboard.html');
    // You can redirect the user to another page or perform any other action here
  } else {
    alert('Invalid username or password. Please try again.');
    // You can clear the input fields or show an error message here
  }
});