document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

    setTimeout(function() {
        document.body.classList.add('loaded');
    }, 500); // Increased delay to 500ms

    var contactForm = document.getElementById('contact-form');
    if (contactForm) {
        console.log("Contact form found");
        contactForm.addEventListener('submit', function(event) {
            var name = document.getElementById('name').value.trim();
            var email = document.getElementById('email').value.trim();
            var message = document.getElementById('message').value.trim();
            
            var errorMessage = document.getElementById('error-message');
            if (!name || !email || !message) {
                errorMessage.textContent = 'Please fill in all fields.';
                errorMessage.style.color = 'red';
                event.preventDefault();
            } else {
                errorMessage.textContent = 'Your message has been sent successfully!';
                errorMessage.style.color = 'green';
            }
        });
    } else {
        console.error('Contact form element not found!');
    }
});

function contactUs() {
    alert("Thank you for your interest! Please fill out the contact form below.");
}
