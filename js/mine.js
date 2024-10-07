 document.addEventListener("DOMContentLoaded", function () {
   const form = document.getElementById("rentalForm");
   const nameInput = document.getElementById("name");
   const phoneInput = document.getElementById("phone");
   const relativePhoneInput = document.getElementById("relative-phone");
   const photoInput = document.getElementById("photo");
   const licenseInput = document.getElementById("license");

   function validateName() {
     const nameError = document.getElementById("nameError");
     if (nameInput.value.length < 2) {
       nameError.textContent = "Name must be at least 2 characters long";
       return false;
     }
     nameError.textContent = "";
     return true;
   }

   function validatePhone(input, errorElement) {
     const phoneError = document.getElementById(errorElement);
     const phoneRegex = /^\d{10}$/;
     if (!phoneRegex.test(input.value)) {
       phoneError.textContent = "Please enter a valid 10-digit phone number";
       return false;
     }
     phoneError.textContent = "";
     return true;
   }

   function previewImage(input, previewElement) {
     const preview = document.getElementById(previewElement);
     const file = input.files[0];
     const reader = new FileReader();

     reader.onloadend = function () {
       preview.src = reader.result;
       preview.style.display = "block";
     };

     if (file) {
       reader.readAsDataURL(file);
     } else {
       preview.src = "";
       preview.style.display = "none";
     }
   }

   nameInput.addEventListener("blur", validateName);
   phoneInput.addEventListener("blur", () =>
     validatePhone(phoneInput, "phoneError")
   );
   relativePhoneInput.addEventListener("blur", () =>
     validatePhone(relativePhoneInput, "relativePhoneError")
   );
   photoInput.addEventListener("change", () =>
     previewImage(photoInput, "photoPreview")
   );
   licenseInput.addEventListener("change", () =>
     previewImage(licenseInput, "licensePreview")
   );

   form.addEventListener("submit", function (e) {
     e.preventDefault();
     if (
       validateName() &&
       validatePhone(phoneInput, "phoneError") &&
       validatePhone(relativePhoneInput, "relativePhoneError")
     ) {
       alert("Form submitted successfully!");
 
     }
   });
 });