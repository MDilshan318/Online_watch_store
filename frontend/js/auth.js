document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const alertBox = document.getElementById('login-alert');

            try {
                const res = await fetch('http://localhost:8080/api/auth/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, password })
                });
                
                const data = await res.json();
                
                if (res.ok) {
                    alertBox.textContent = 'Login successful!';
                    alertBox.className = 'alert success';
                    localStorage.setItem('luxury_username', data.username);
                    setTimeout(() => window.location.href = 'index.html', 1000);
                } else {
                    alertBox.textContent = data.error || 'Login failed';
                    alertBox.className = 'alert error';
                }
            } catch (err) {
                alertBox.textContent = 'Could not connect to the backend server. Make sure it is running on port 8080.';
                alertBox.className = 'alert error';
            }
        });
    }

    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const alertBox = document.getElementById('signup-alert');

            try {
                const res = await fetch('http://localhost:8080/api/auth/signup', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ username, email, password })
                });
                
                const data = await res.json();
                
                if (res.ok) {
                    alertBox.textContent = 'Account created! Redirecting to login...';
                    alertBox.className = 'alert success';
                    setTimeout(() => window.location.href = 'login.html', 1500);
                } else {
                    alertBox.textContent = data.error || 'Signup failed';
                    alertBox.className = 'alert error';
                }
            } catch (err) {
                alertBox.textContent = 'Could not connect to the backend server. Make sure it is running on port 8080.';
                alertBox.className = 'alert error';
            }
        });
    }
});
