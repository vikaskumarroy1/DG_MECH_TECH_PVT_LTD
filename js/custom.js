// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

// owl carousel 

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 6
        }
    }
})


// Initialize EmailJS with your user ID (replace with your actual EmailJS User ID)

document.getElementById("contact-form").addEventListener("submit", function(event){
    event.preventDefault(); // Prevent form from submitting

    // Show loader and hide form while email is being sent
    document.getElementById("loader").style.display = "block"; 
    document.getElementById("contact-form").style.display = "none";

    // Gather parameters from the form
    let params = {
        to_name: "DG TECH", // Replace with the actual recipient name
        from_name: document.getElementById("name").value,
        from_email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value,
    };

    // Send the email using emailjs
    emailjs.send("service_phrdiad", "template_kwn0wua", params)
        .then(function(response) {
            document.getElementById("loader").style.display = "none"; // Hide loader on success
            alert("Email sent successfully!");
            console.log('SUCCESS!', response.status, response.text);
            
            // Reset form and show it again after success
            document.getElementById("contact-form").reset();
            document.getElementById("contact-form").style.display = "block";
        }, function(error) {
            document.getElementById("loader").style.display = "none"; // Hide loader on failure
            console.error('Email sending failed:', error); // Log the error for debugging
            alert("Failed to send email. Please try again.");
        });
});
