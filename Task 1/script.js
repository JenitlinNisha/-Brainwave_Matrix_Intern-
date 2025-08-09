// Email Validation
function validateEmail(inputId, messageId) {
    let emailInput = document.getElementById(inputId).value;
    let message = document.getElementById(messageId);
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (emailPattern.test(emailInput)) {
        message.style.color = "lightgreen";
        message.textContent = "Success! Redirecting...";
        setTimeout(() => {
            window.location.href = "https://www.netflix.com/signup";
        }, 1500);
    } else {
        message.style.color = "red";
        message.textContent = "Please enter a valid email address.";
    }
}

// Form Event Listeners
document.getElementById("emailForm").addEventListener("submit", function(e) {
    e.preventDefault();
    validateEmail("email", "message");
});
document.getElementById("emailForm2").addEventListener("submit", function(e) {
    e.preventDefault();
    validateEmail("email2", "message2");
});

// FAQ Toggle
let faqButtons = document.querySelectorAll(".faq-question");
faqButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        let answer = btn.nextElementSibling;
        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            document.querySelectorAll(".faq-answer").forEach(a => a.style.display = "none");
            answer.style.display = "block";
        }
    });
});
