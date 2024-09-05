document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

    setTimeout(function() {
        document.body.classList.add('loaded');
    }, 100);

    var contactForm = document.getElementById('contact-form');
    if (contactForm) {
        console.log("Contact form found");
        contactForm.addEventListener('submit', function(event) {
            var name = document.getElementById('name').value;
            var email = document.getElementById('email').value;
            var message = document.getElementById('message').value;

            if (name === '' || email === '' || message === '') {
                alert('Please fill in all fields.');
                event.preventDefault(); // Prevents form submission
            } else {
                alert('Your message has been sent successfully!');
            }
        });
    } else {
        console.error('Contact form element not found!');
    }
});

// JavaScript for Button Action
function contactUs() {
    alert("Thank you for your interest! Please fill out the contact form below.");
}
