const eyes = document.querySelectorAll('i.fas.fa-eye.icon-password');

        eyes.forEach(eye => {
            eye.addEventListener("click", togglePasswordVisibility);
        });

        function togglePasswordVisibility(event) {
            const icon = event.target;
            const passwordInput = document.getElementById(icon.getAttribute("data-password"));

            if (passwordInput.type === "password") {
                passwordInput.type = "text";
            } else {
                passwordInput.type = "password";
            }

            icon.classList.toggle("fa-eye");
            icon.classList.toggle("fa-eye-slash");
        }

        const submitButton = document.getElementById("submit-button");
        submitButton.addEventListener("click", checkPasswords);

        function checkPasswords() {
            const password1 = document.getElementById("password1").value;
            const password2 = document.getElementById("password2").value;
            const errorMessage = document.getElementById("error-message");

            if (password1 === password2) {
                errorMessage.textContent = "";
                alert("You are welcome");
            } else {
                errorMessage.textContent = "Потрібно ввести однакові значення";
            }
        }