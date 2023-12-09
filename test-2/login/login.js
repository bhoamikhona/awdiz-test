const login = function(event) {
    event.preventDefault();
    
    let userEmail = document.getElementById('email').value;
    let userPassword = document.getElementById('password').value;


    if (!userEmail || !userPassword) {
        return alert('cannot leave the form empty');
    }

    const users = JSON.parse(localStorage.getItem('users'));
    console.log(users);

    for (let i = 0; i < users.length; i++) {
        if (userEmail == users[i].userEmail && userPassword == users[i].userPassword) {
            window.location.href = './../index.html';
            return alert(`login succesful`);
        }
    }

    alert('invalid email or password');
}