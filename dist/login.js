
const saveUserInLocalStorage = function(user) {
    const userData = JSON.stringify(user);
    localStorage.setItem('userData', userData);
};

const goInside = function() {
    window.location.href = "./recipes.html";
};

const signUp = function(user) {
    return new Promise((resolve, reject) => {
        $.post('/users/signUp', user)
            .done(response => {
                resolve(response);
            })
            .fail((jqXHR, textStatus, errorThrown) => {
                reject({ error: 'Error occurred', details: errorThrown });
            });
    });
};

const signupHandler = function() {
    const username = $('#username').val().trim();
    const email = $('#email').val().trim();
    const password = $('#password').val().trim();

    if (username === '' || email === '' || password === '') {
        console.log('Please fill in all fields.');
        return;
    }

    const user = { username, email, password };

    signUp(user)
        .then(response => {
            alert(response.result);
        })
        .catch(error => {
            alert(error.message || 'An error occurred. Please try again.');
        });
};


const loginHandler = function() {
    const email = $('#signinemail').val().trim();
    const password = $('#signinpassword').val().trim();

    if (email === '' || password === '') {
        console.log('Please fill in all fields.');
        return;
    }

    const user = { email, password };

    $.post('/users/checkuser', user)
        .done(response => {
            if (response.result) {
                saveUserInLocalStorage(user);
                goInside();
            } else {
                alert('Login failed. Please try again.');
            }
        })
        .fail((jqXHR, textStatus, errorThrown) => {
            console.error('Error:', textStatus, errorThrown);
            alert('Error occurred. Please try again.');
        });
};

