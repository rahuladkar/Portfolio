//  .............. script for the navbar ..............

const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});


//  .............. script for the contact form .............. 

function submitForm() {
    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Validate form values
    if (!name || !email || !message) {
        displayAlert("error", "Please fill out all fields");
        return;
    }
}

//  .............. script for the call me .............. 

function callNumber() {
    window.location.href = "tel:+917499947148";
}