

document.addEventListener('DOMContentLoaded', function() {
    console.log('Shopii - Site charge');
    
    
    
    const togglePassword = document.getElementById('togglePassword');
    const showPasswordCheckbox = document.getElementById('showPassword');
    const passwordField = document.getElementById('password');
    
    if (togglePassword) {
        togglePassword.addEventListener('click', function() {
            const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordField.setAttribute('type', type);
            this.innerHTML = type === 'password' ? '<i class="fas fa-eye"></i>' : '<i class="fas fa-eye-slash"></i>';
        });
    }
    
    if (showPasswordCheckbox) {
        showPasswordCheckbox.addEventListener('change', function() {
            if (passwordField) {
                passwordField.type = this.checked ? 'text' : 'password';
            }
        });
    }
    
    
    const signupForm = document.getElementById('signupForm');
    
    if (signupForm) {
        const usernameInput = document.getElementById('username');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        
        
        usernameInput?.addEventListener('input', function() {
            const error = document.getElementById('usernameError');
            if (this.value.length < 3) {
                this.classList.add('invalid');
                this.classList.remove('valid');
                error.style.display = 'block';
            } else {
                this.classList.add('valid');
                this.classList.remove('invalid');
                error.style.display = 'none';
            }
        });
        
        emailInput?.addEventListener('input', function() {
            const error = document.getElementById('emailError');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(this.value)) {
                this.classList.add('invalid');
                this.classList.remove('valid');
                error.style.display = 'block';
            } else {
                this.classList.add('valid');
                this.classList.remove('invalid');
                error.style.display = 'none';
            }
        });
        
        passwordInput?.addEventListener('input', function() {
            const error = document.getElementById('passwordError');
            if (this.value.length < 6) {
                this.classList.add('invalid');
                this.classList.remove('valid');
                error.style.display = 'block';
            } else {
                this.classList.add('valid');
                this.classList.remove('invalid');
                error.style.display = 'none';
            }
        });
        
        
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            
            
            if (usernameInput.value.length < 3) {
                alert('Le nom d\'utilisateur doit contenir au moins 3 caractères.');
                isValid = false;
            }
            
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
                alert('Mettre une adresse email valide.');
                isValid = false;
            }
            
            if (passwordInput.value.length < 6) {
                alert('Le mot de passe doit comporter au moins 6 caractères.');
                isValid = false;
            }
            
            if (isValid) {
                alert('Compte créé avec succès ! Redirection vers la page de connexion…');
                window.location.href = 'Connecter.html';
            }
        });
    }
    
    
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            if (!email || !password) {
                alert('Please fill in all fields');
                return;
            }
            
            
            alert('Login successful! Redirecting to homepage...');
            window.location.href = 'index.html';
        });
    }
    
    
    const sizeButtonsContainer = document.getElementById('sizeButtons');
    
    if (sizeButtonsContainer) {
        const sizes = [4, 5, 6, 7, 8, 9, 10, 11, 12];
        
        sizes.forEach(size => {
            const button = document.createElement('button');
            button.type = 'button';
            button.className = 'size-btn';
            button.textContent = size;
            button.dataset.size = size;
            
            button.addEventListener('click', function() {
                
                document.querySelectorAll('.size-btn').forEach(btn => {
                    btn.classList.remove('active');
                });
                
                
                this.classList.add('active');
                
                
                const buyButton = document.getElementById('buyButton');
                if (buyButton) {
                    buyButton.textContent = `Buy now (Size ${size}) for CA140$`;
                }
            });
            
            sizeButtonsContainer.appendChild(button);
        });
        
        
        setTimeout(() => {
            const defaultSize = document.querySelector('.size-btn[data-size="8"]');
            if (defaultSize) {
                defaultSize.click();
            }
        }, 100);
    }
    
    
    const buyButton = document.getElementById('buyButton');
    
    if (buyButton) {
        buyButton.addEventListener('click', function() {
            const selectedSize = document.querySelector('.size-btn.active');
            
            if (!selectedSize) {
                alert('Please select a size first');
                return;
            }
            
            const size = selectedSize.dataset.size;
            const confirmed = confirm(`Confirm purchase of Nike Air Force 1 - Size ${size} for CA140$?`);
            
            if (confirmed) {
                alert('Purchase successful! Thank you for your order.');
                
                window.location.href = 'index.html';
            }
        });
    }
    
    
    const inputs = document.querySelectorAll('input[type="text"], input[type="email"], input[type="password"]');
    
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.backgroundColor = '#f0f9ff';
            this.style.borderColor = '#2563eb';
        });
        
        input.addEventListener('blur', function() {
            this.style.backgroundColor = '';
        });
    });
    
    
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || 
            (currentPage === '' && linkPage === 'index.html') ||
            (currentPage === 'index.html' && linkPage === 'index.html')) {
            link.style.color = '#2563eb';
            link.style.fontWeight = 'bold';
        }
    });
});