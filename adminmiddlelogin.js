function checkPassword() {
    let password = "admin123"; 
    let input = document.getElementById("passwordInput").value;

    if (input === password) {
        // Store login status in sessionStorage
        sessionStorage.setItem("authenticated", "true");
        window.location.href = "admin-login.html"; // Redirect to Admin Page
    } else {
        document.getElementById("error-message").style.display = "block"; // Show error
    }
}
