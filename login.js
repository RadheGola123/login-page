document.addEventListener("DOMContentLoaded", function() {
	const signupForm = document.getElementById("signup-form");
	const loginForm = document.getElementById("login-form");

	const users = JSON.parse(localStorage.getItem('users')) || [];

	signupForm.addEventListener("submit", function(event) {
		event.preventDefault();
		const formData = new FormData(signupForm);
		const user = {
			username: formData.get("username"),
			email: formData.get("email"),
			password: formData.get("password"),
			dob: formData.get("dob"),
		};
		users.push(user);
		localStorage.setItem('users', JSON.stringify(users));
		alert("Account created successfully!");
		signupForm.reset();
	});

	loginForm.addEventListener("submit", function(event) {
		event.preventDefault();
		const formData = new FormData(loginForm);
		const email = formData.get("email");
		const password = formData.get("password");
		const user = users.find(u => u.email === email && u.password === password);

		if (user) {
			localStorage.setItem('loggedInUser', JSON.stringify(user));
			window.location.href = 'welcome.html';
		} else {
			alert("Invalid email or password!");
		}
		loginForm.reset();
	});
});
