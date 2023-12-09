const register = function(event) {

    let userEmail = document.getElementById('email').value;
    let userName = document.getElementById('name').value;
    let userPassword = document.getElementById('password').value;


    event.preventDefault();
    
    if (userEmail=="" || userName=="" || userPassword=="") {
        return alert('Cannot leave the form empty');
    }

    const userData = {userName, userEmail, userPassword}

    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(userData);
    localStorage.setItem('users', JSON.stringify(users));

    alert('registration successful');

    window.location.href = './../index.html'
}