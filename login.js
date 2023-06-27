document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        var email = document.getElementById('emailInput').value;
        var password = document.getElementById('passwordInput').value;

        // Check if email and password are correct
        if (email === 'jcreyes@gmail.com' && (password === 'admin123' || password === 'newadmin')) {
          alert('Login successful!');
          window.location.href = 'dashboard.html';
        } else {
          alert('Invalid credentials. Please try again.');
        }
      });

      document.getElementById('googleSignInBtn').addEventListener('click', function(e) {
        e.preventDefault();
        alert('Sign in with Google is currently not available.');
      });