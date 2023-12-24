let users = [
    {
        username: 'test',
        email: 'test@gmail.com',
        password: '123456',
    }
];

function checkuser(user) {
    console.log( 'printing users from check user function  : ' , users)
    const response = { message: '', result: false };

    const existingUser = users.find(existuser => existuser.email.toLowerCase() == user.email.toLowerCase());

    if (!existingUser) {
        response.message = 'You need to sign up first'
        return response;
    }
    if (existingUser.password === user.password) {
        response.message = 'Everything is fine. Go inside.'     
        response.result = true;
        return response;
    } else {
        response.message = 'Email exists, but the password seems wrong.'
        return response;
    }
}

function addUser(user) {
    console.log('printing users from adduser function : ' , users)
    const response = { message: '', result: false };
    if (checkemail(user.email) && checkpassword(user.password) && checkusername(user.username)) {
        response.result = true;
        newObj={
            username : user.username,
            email : user.email,
            password : user.password
        }
        users.push(newObj);
        console.log('printing users from adduser function  after adding: ' , users)
        response.message = 'User added successfully.';
        return response;
    } else {
        response.message = 'Failed to add user. Please check inputs.';
        return response;
    }
}

function checkemail(email) {
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const existingUser = users.find(user => user.email.toLowerCase() === email.toLowerCase());
    if (existingUser) {
        return false;
    }

    return emailRegex.test(email);
}


function checkpassword(password) {
    return password.length >= 6;
}

function checkusername(username) {
    return username.length >= 4;
}

module.exports = {
    checkuser,
    addUser
};
