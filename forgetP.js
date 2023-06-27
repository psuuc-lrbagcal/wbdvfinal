 // JavaScript code for login functionality
 function auth(){

    var email = document.getElementById("email").value;

    // Check if email matches the provided login email
    if (email === "jcreyes@gmail.com") {
      // Simulate password recovery functionality
      alert("Password reset instructions have been sent to your email: " + email);
      document.getElementById("forgotPasswordForm").reset();
    } else {
      // Email does not match
      alert("The provided email does not exist. Please try again.");
    }
}