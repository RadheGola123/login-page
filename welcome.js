window.onload = function() {
    // Retrieve user email from sessionStorage
    const userEmail = sessionStorage.getItem('currentUserEmail');
    
    // Display user email
    if (userEmail) {
        document.getElementById('user-info').textContent = `You are logged in as ${userEmail}.`;
    } else {
        // If no user data is found, redirect to login page
        window.location.href = 'index.html';
    }
};

// Handle logout
function logout() {
    // Clear user email from sessionStorage
    sessionStorage.removeItem('currentUserEmail');
    
    // Redirect to login page
    window.location.href = 'index.html';
}
