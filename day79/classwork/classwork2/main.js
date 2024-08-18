function validateForm() {
          
    const form = document.getElementById('myForm');


    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const favoriteColor = document.getElementById('favoriteColor').value.trim();

   
    if (fullName === '' || email === '' || password === '' || favoriteColor === '') {
       
        document.getElementById('message').textContent = 'Please fill in all fields.';
    } else {
      
        document.getElementById('message').textContent = '';

        alert('All fields are filled out. Form can be submitted.');
    }
}