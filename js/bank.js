document.getElementById('login-submit').addEventListener('click', function () {
    // get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    // check email and password
    if (userEmail == 'asiabank@bank.com' && userPassword == 'bank') {
        window.location.href = 'banking.html';
    }
    else{
        alert('Envalid Email Or Password')
    }
});

document.getElementById('user-password').addEventListener('keyup', function(event){
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("login-submit").click();
       }
})