document.addEventListener("DOMContentLoaded", function () {
    console.log("Big Ben Spaza Shop website script loaded successfully.");

    const enquiryForm = document.querySelector("form");

    if (enquiryForm) {
        enquiryForm.addEventListener("submit", function (event) {
            alert("Thank you for your enquiry! Big Ben Spaza Shop will contact you shortly.");
        });
    }
});