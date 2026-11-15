function validateForm() {
            // Note: We evaluate every function individually into variables so that
            // every field gets checked and displays its respective error message
            // instead of stopping at the first failure (short-circuiting).
            let isNameValid = validateName();
            let isIdValid = validateStudentID();
            let isAgeValid = validateAge();
            let isDobValid = validateDOB();
            let isEmailValid = validateEmail();
            let isGenderValid = validateGender();
            let isDeptValid = validateDepartments();
            let isProgramValid = validateProgram();
            let isFileValid = validateTranscript();
            let isAddressValid = validateAddress();
            let isPasswordValid = validatePassword();
            let isConfirmPassValid = validateConfirmPassword();
            let isTermsValid = validateTerms();

            // Overall result: True ONLY if all checks passed
            let isFormValid = isNameValid && isIdValid && isAgeValid && isDobValid &&
                isEmailValid && isGenderValid && isDeptValid && isProgramValid &&
                isFileValid && isAddressValid && isPasswordValid &&
                isConfirmPassValid && isTermsValid;

            if (isFormValid) {
                alert("🎉 Admission Registration Form Submitted Successfully!");
                return true;  // Allows the form submission
            } else {
                alert("⚠️ Please correct the highlighted errors before submitting the form.");
                return false; // Cancels form submission and keeps the user on the page
            }
        }

        /**
         * 1. Validate Full Name:
         * - Must not be empty.
         * - Minimum 6 characters.
         * - Must contain only letters and whitespace.
         */
        function validateName() {
            let nameInput = document.getElementById("fullName").value.trim();
            let errSpan = document.getElementById("nameError");
            let namePattern = /^[a-zA-Z\s]+$/;

            if (nameInput === "") {
                errSpan.innerHTML = "Name cannot be empty.";
                return false;
            } else if (nameInput.length < 6) {
                errSpan.innerHTML = "Name must be at least 6 characters long.";
                return false;
            } else if (!namePattern.test(nameInput)) {
                errSpan.innerHTML = "Name can only contain alphabetic characters and spaces.";
                return false;
            } else {
                errSpan.innerHTML = ""; // Clear error
                return true;
            }
        }

        /**
         * 2. Validate Student ID:
         * - Must follow the format: XX-XXXXX-X (e.g., 22-46001-1)
         */
        function validateStudentID() {
            let idInput = document.getElementById("studentId").value.trim();
            let errSpan = document.getElementById("idError");
            // Format: 2 digits, hyphen, 5 digits, hyphen, 1 digit
            let idPattern = /^[0-9]{2}-[0-9]{5}-[0-9]{1}$/;

            if (idInput === "") {
                errSpan.innerHTML = "Student ID cannot be empty.";
                return false;
            } else if (!idPattern.test(idInput)) {
                errSpan.innerHTML = "Invalid format! Use AIUB ID format (e.g., 22-46001-1).";
                return false;
            } else {
                errSpan.innerHTML = "";
                return true;
            }
        }

        /**
         * 3. Validate Age:
         * - Must not be empty.
         * - Must be a number between 17 and 60.
         */
        function validateAge() {
            let rawAge = document.getElementById("studentAge").value.trim();
            let errSpan = document.getElementById("ageError");

            if (rawAge === "") {
                errSpan.innerHTML = "Please enter your age.";
                return false;
            }

            let age = Number(rawAge);
            if (isNaN(age) || age < 17 || age > 60) {
                errSpan.innerHTML = "Age must be a valid number between 17 and 60.";
                return false;
            } else {
                errSpan.innerHTML = "";
                return true;
            }
        }

        /**
         * 4. Validate Date of Birth (DOB):
         * - Field must not be left empty.
         */
        function validateDOB() {
            let dobValue = document.getElementById("studentDOB").value;
            let errSpan = document.getElementById("dobError");

            if (dobValue === "") {
                errSpan.innerHTML = "Please select your date of birth.";
                return false;
            } else {
                errSpan.innerHTML = "";
                return true;
            }
        }

        /**
         * 5. Validate Email:
         * - Must match standard email format: text@domain.ext
         */
        function validateEmail() {
            let email = document.getElementById("studentEmail").value.trim();
            let errSpan = document.getElementById("emailError");
            let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (email === "") {
                errSpan.innerHTML = "Email cannot be empty.";
                return false;
            } else if (!emailPattern.test(email)) {
                errSpan.innerHTML = "Please enter a valid email address (e.g., name@domain.com).";
                return false;
            } else {
                errSpan.innerHTML = "";
                return true;
            }
        }

        /**
         * 6. Validate Gender (Radio Buttons):
         * - One radio button must be checked.
         */
        function validateGender() {
            let genderRadios = document.querySelectorAll('input[name="gender"]');
            let errSpan = document.getElementById("genderError");
            let isSelected = false;

            for (let i = 0; i < genderRadios.length; i++) {
                if (genderRadios[i].checked) {
                    isSelected = true;
                    break;
                }
            }

            if (!isSelected) {
                errSpan.innerHTML = "Please select your gender.";
                return false;
            } else {
                errSpan.innerHTML = "";
                return true;
            }
        }

        /**
         * 7. Validate Department Checkboxes:
         * - At least one department must be ticked.
         */
        function validateDepartments() {
            let deptBoxes = document.querySelectorAll('input[name="dept"]');
            let errSpan = document.getElementById("deptError");
            let isChecked = false;

            for (let i = 0; i < deptBoxes.length; i++) {
                if (deptBoxes[i].checked) {
                    isChecked = true;
                    break;
                }
            }

            if (!isChecked) {
                errSpan.innerHTML = "Please select at least one department.";
                return false;
            } else {
                errSpan.innerHTML = "";
                return true;
            }
        }

        /**
         * 8. Validate Degree Program (Dropdown):
         * - User must select a valid choice, not the placeholder option.
         */
        function validateProgram() {
            let programSelect = document.getElementById("degreeProgram");
            let errSpan = document.getElementById("programError");

            if (programSelect.value === "") {
                errSpan.innerHTML = "Please select a degree program.";
                return false;
            } else {
                errSpan.innerHTML = "";
                return true;
            }
        }

        /**
         * 9. Validate File Upload:
         * - Check that a file has actually been picked.
         */
        function validateTranscript() {
            let fileInput = document.getElementById("transcript");
            let errSpan = document.getElementById("fileError");

            if (fileInput.files.length === 0) {
                errSpan.innerHTML = "Please attach your academic transcript file.";
                return false;
            } else {
                errSpan.innerHTML = "";
                return true;
            }
        }

        /**
         * 10. Validate Address:
         * - Must not be empty.
         * - Minimum 10 characters.
         */
        function validateAddress() {
            let address = document.getElementById("address").value.trim();
            let errSpan = document.getElementById("addressError");

            if (address === "") {
                errSpan.innerHTML = "Present address cannot be empty.";
                return false;
            } else if (address.length < 10) {
                errSpan.innerHTML = "Address is too short (minimum 10 characters).";
                return false;
            } else {
                errSpan.innerHTML = "";
                return true;
            }
        }

        /**
         * 11. Validate Password:
         * - Must be at least 8 characters.
         * - Must contain at least one letter and at least one number.
         */
        function validatePassword() {
            let password = document.getElementById("userPassword").value;
            let errSpan = document.getElementById("passwordError");
            let hasLetter = /[a-zA-Z]/.test(password);
            let hasNumber = /[0-9]/.test(password);

            if (password === "") {
                errSpan.innerHTML = "Password cannot be empty.";
                return false;
            } else if (password.length < 8) {
                errSpan.innerHTML = "Password must be at least 8 characters long.";
                return false;
            } else if (!hasLetter || !hasNumber) {
                errSpan.innerHTML = "Password must contain both letters and numbers.";
                return false;
            } else {
                errSpan.innerHTML = "";
                return true;
            }
        }

        /**
         * 12. Validate Confirm Password:
         * - Must match the password value.
         */
        function validateConfirmPassword() {
            let password = document.getElementById("userPassword").value;
            let confirmPass = document.getElementById("confirmPassword").value;
            let errSpan = document.getElementById("confirmPassError");

            if (confirmPass === "") {
                errSpan.innerHTML = "Please confirm your password.";
                return false;
            } else if (password !== confirmPass) {
                errSpan.innerHTML = "Passwords do not match!";
                return false;
            } else {
                errSpan.innerHTML = "";
                return true;
            }
        }

        /**
         * 13. Validate Terms and Conditions Checkbox:
         * - Must be checked.
         */
        function validateTerms() {
            let termsCheckbox = document.getElementById("termsCheck");
            let errSpan = document.getElementById("termsError");

            if (!termsCheckbox.checked) {
                errSpan.innerHTML = "You must agree to the declaration before submitting.";
                return false;
            } else {
                errSpan.innerHTML = "";
                return true;
            }
        }

        /**
         * Helper Function: Clears all error messages when the reset button is clicked.
         */
        function clearAllErrors() {
            let errorElements = document.querySelectorAll(".error-msg");
            errorElements.forEach(function (elem) {
                elem.innerHTML = "";
            });
        }