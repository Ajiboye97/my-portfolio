// Wait for the page to load
document.addEventListener("DOMContentLoaded", () => {

    // Smooth scrolling for links within the same page
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", function (event) {
            const targetId = this.getAttribute("href");

            if (targetId !== "#") {
                const target = document.querySelector(targetId);

                if (target) {
                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth"
                    });
                }
            }
        });
    });


    // Contact form validation
    const contactForm = document.querySelector(".contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {

            const name = document.querySelector("#name");
            const email = document.querySelector("#email");
            const subject = document.querySelector("#subject");
            const message = document.querySelector("#message");

            if (
                name.value.trim() === "" ||
                email.value.trim() === "" ||
                subject.value.trim() === "" ||
                message.value.trim() === ""
            ) {
                event.preventDefault();
                alert("Please fill in all the fields before submitting.");
                return;
            }

            alert("Thank you for reaching out! Your message is ready to be sent.");
        });
    }

});