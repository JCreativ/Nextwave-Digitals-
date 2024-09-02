// JavaScript for Animations

document.addEventListener("DOMContentLoaded", function() {
    // Adding a class to trigger CSS animations when the page loads
    setTimeout(function() {
        document.body.classList.add('loaded');
    }, 100);
});

// JavaScript for Form Validation

document.getElementById('contact-form').addEventListener('submit', function(event) {
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

// JavaScript for Button Action
function contactUs() {
    alert("Thank you for your interest! Please fill out the contact form below.");
}