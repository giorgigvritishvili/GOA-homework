
const formDataArray = [];
function handleSubmit(event) {
    event.preventDefault();
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    if (firstName === '' || lastName === '' || email === '') {
        alert('All fields are required.');
        return;
    }
    const formData = {
        firstName: firstName,
        lastName: lastName,
        email: email
    };
    formDataArray.push(formData);
    document.getElementById('registrationForm').reset();
    console.log(formDataArray);
}
document.getElementById('registrationForm').addEventListener('submit', handleSubmit);
