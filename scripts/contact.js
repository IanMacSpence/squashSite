/*This code stores the customer information in session storage when it is submitted through the contact form
Ideally, the information would be stored in a database on the backend, but this is beyond what has been covered in the bootcamp thus far.   */

// Get the customerArray from sessionStorage if it exists, else start with an empty array
let storedCustomerArray = sessionStorage.getItem("customerArray");
let customerArray = storedCustomerArray ? JSON.parse(storedCustomerArray) : [];

document.getElementById('contact-form').addEventListener('submit', function(event) {
  // Prevent the form from submitting
  event.preventDefault();

  // Retrieve the form data
  let firstName = document.getElementById('firstName').value;
  let lastName = document.getElementById('lastName').value;
  let phoneNumber = document.getElementById('phoneNumber').value;
  let emailAddress = document.getElementById('emailAddress').value;
  let ageGroup = document.querySelector('input[name="ageGroup"]:checked').value;
  let skillLevel = document.querySelector('input[name="skillLevel"]:checked').value;

  // Create an object with the form data
  let customerData = {
    firstName: firstName, 
    lastName: lastName, 
    phoneNumber: phoneNumber, 
    emailAddress: emailAddress, 
    ageGroup: ageGroup, 
    skillLevel: skillLevel
  };

  // Add the new customer data to the array
  customerArray.push(customerData);

  // Convert customerArray to JSON string and store it in sessionStorage
  sessionStorage.setItem('customerArray', JSON.stringify(customerArray));
});
