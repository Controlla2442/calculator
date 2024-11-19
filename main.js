const calInput = document.getElementById("calInput");
const buttons = document.querySelectorAll(".button"); // Select all buttons with class "button"

// Add event listeners to all buttons
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.textContent; // Get the button text

        if (value.trim().toUpperCase() === "C") {
            calInput.value = ""; // Clear the input field
        } else if (value === "=") {
            try {
                calInput.value = eval(calInput.value); // Safely evaluate the expression
            } catch {
                calInput.value = "Error"; // Handle invalid expressions
            }
        } else {
            calInput.value += value; // Append the button value to the input
        }
    });
});
