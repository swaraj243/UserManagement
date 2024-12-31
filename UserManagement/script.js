document.getElementById("loginForm").addEventListener("submit", function(e) {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Basic validation
    if (!email.includes('@')) {
        alert("Please enter a valid email.");
        e.preventDefault(); // Stop form submission
    } else if (password.length < 6) {
        alert("Password must be at least 6 characters.");
        e.preventDefault(); // Stop form submission
    }
});