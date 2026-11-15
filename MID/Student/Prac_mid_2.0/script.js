function clearFeedback() {
            // Clear every old field error before checking the form again.
            const errors = document.querySelectorAll(".error");
            for (const error of errors) {
                error.textContent = "";
            }

            const status = document.getElementById("status");
            status.textContent = "";
            status.className = "";
        }

        function updatePreferences() {
            const level = document.getElementById("level").value;
            const color = document.getElementById("badgeColor").value;

            document.getElementById("levelValue").textContent = level;
            document.getElementById("badgeSwatch").style.backgroundColor = color;
        }

        function previewPreferences() {
            const keyword = document.getElementById("keyword").value.trim();
            const level = document.getElementById("level").value;

            document.getElementById("preview").textContent =
                "Topic keyword: " + (keyword || "None entered") +
                " | Familiarity: " + level + "/5";
        }

        function resetFeedback() {
            clearFeedback();
            document.getElementById("preview").textContent = "";

            // Wait until the browser restores the default slider and color values.
            setTimeout(updatePreferences, 0);
        }

        function validateForm(event) {
            // Keep the practice page open so it can display errors or confirmation.
            event.preventDefault();
            clearFeedback();

            let isValid = true;
            const status = document.getElementById("status");

            function showError(errorId, message) {
                const error = document.getElementById(errorId);
                error.textContent = message;
                error.style.color = "#ac211d"; // Lab 04 uses element.style for red errors.
                isValid = false;
            }

            // Read fields by ID. Keep passwords exactly as typed.
            const fullName = document.getElementById("fullName").value.trim();
            const studentId = document.getElementById("studentId").value.trim();
            const dob = document.getElementById("dob");
            const email = document.getElementById("email").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const password = document.getElementById("password").value;
            const confirmPassword = document.getElementById("confirmPassword").value;
            const semester = Number(document.getElementById("semester").value);
            const department = document.getElementById("department").value;
            const proof = document.getElementById("proof").files[0];
            const note = document.getElementById("note").value.trim();
            const portfolio = document.getElementById("portfolio");

            // A radio group has at most one checked member.
            let selectedMode = "";
            for (const radio of document.getElementsByName("mode")) {
                if (radio.checked) {
                    selectedMode = radio.value;
                    break;
                }
            }

            // A checkbox group can have several checked members.
            const selectedTopics = [];
            for (const box of document.getElementsByName("topics")) {
                if (box.checked) {
                    selectedTopics.push(box.value);
                }
            }

            // Separate if statements let all applicable errors appear together.
            if (fullName.length < 3) {
                showError("nameError", "Enter at least 3 characters for your name.");
            }

            // ^ and $ mark the start and end. \d{2} means exactly two digits.
            if (!/^\d{2}-\d{5}-\d$/.test(studentId)) {
                showError("idError", "Use the student ID format 24-12345-2.");
            }

            // Convert today's local calendar date to the same format as dob.valueAsNumber.
            const today = new Date();
            const todayAsNumber = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
            if (dob.value === "" || dob.valueAsNumber >= todayAsNumber) {
                showError("dobError", "Choose a date of birth earlier than today.");
            }

            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                showError("emailError", "Enter an email like student@example.com.");
            }

            if (!/^01\d{9}$/.test(phone)) {
                showError("phoneError", "Enter 11 digits beginning with 01.");
            }

            if (password.length < 8) {
                showError("passwordError", "Use at least 8 characters.");
            }

            if (confirmPassword === "" || confirmPassword !== password) {
                showError("confirmError", "Re-enter the same password.");
            }

            // An empty number field converts to 0, which fails this range check.
            if (!Number.isInteger(semester) || semester < 1 || semester > 12) {
                showError("semesterError", "Enter a whole number from 1 to 12.");
            }

            if (department === "") {
                showError("departmentError", "Choose a department.");
            }

            if (selectedMode === "") {
                showError("modeError", "Choose an attendance mode.");
            }

            if (selectedTopics.length < 2) {
                showError("topicsError", "Choose at least two workshop topics.");
            }

            // Check that the file exists before accessing its name or size.
            if (!proof) {
                showError("proofError", "Choose your enrollment proof.");
            } else if (!/\.pdf$/i.test(proof.name) || proof.size > 2 * 1024 * 1024) {
                showError("proofError", "Choose a .pdf file of 2 MiB or smaller.");
            }

            if (note.length > 150) {
                showError("noteError", "Keep your learning goal within 150 characters.");
            }

            if (!document.getElementById("terms").checked) {
                showError("termsError", "Tick the box to agree to the workshop terms.");
            }

            // The portfolio field is optional. Validate it when the user enters a URL.
            if (portfolio.value !== "" &&
                (portfolio.validity.typeMismatch || !/^https?:\/\//i.test(portfolio.value))) {
                showError("urlError", "Enter a valid URL beginning with http:// or https://.");
            }

            if (!isValid) {
                status.className = "status-error";
                status.textContent = "Please correct the fields marked above.";
                return false;
            }

            // textContent displays the entered name as plain text.
            const eventCode = document.getElementById("eventCode").value;
            status.className = "success";
            status.textContent =
                "Registration validated for " + fullName + " (" + studentId + "). " +
                "Mode: " + selectedMode + ". Topics: " + selectedTopics.join(", ") +
                ". Event: " + eventCode + ".";

            return true;
        }