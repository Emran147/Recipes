const ERROR_MESSAGES = {
    userExists: 'User is already registered.',
    emailFormat: 'Check your email format.',
    passwordShort: 'Password is too short.',
    usernameShort: 'Username is too short.',
    needSignUp: 'You need to sign up first.',
    wrongPassword: 'Email exists, but the password seems wrong.',
    successAddUser: 'User added successfully.',
}

const MIN_PASSWORD_LENGTH = 5
const MIN_USERNAME_LENGTH = 4

let users = [
    {
        username: 'test',
        email: 'test@gmail.com',
        password: '123456',
    }
];

function checkEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const existingUser = users.find(user => user.email.toLowerCase() === email.toLowerCase())
    
    if (existingUser) {
        return { valid: false, message: ERROR_MESSAGES.userExists }
    }

    if (!emailRegex.test(email)) {
        return { valid: false, message: ERROR_MESSAGES.emailFormat }
    }
    
    return { valid: true };
}

function checkPassword(password) {
    if (password.length < MIN_PASSWORD_LENGTH) {
        return { valid: false, message: ERROR_MESSAGES.passwordShort }
    }
    return { valid: true }
}

function checkUsername(username) {
    if (username.length < MIN_USERNAME_LENGTH) {
        return { valid: false, message: ERROR_MESSAGES.usernameShort }
    }
    return { valid: true }
}

function checkUser(user) {
    const response = { message: '', result: false }
    const existingUser = users.find(existUser => existUser.email.toLowerCase() === user.email.toLowerCase())

    if (!existingUser) {
        response.message = ERROR_MESSAGES.needSignUp
        return response
    }

    if (existingUser.password === user.password) {
        response.message = 'Everything is fine. Go inside.'
        response.result = true
        return response
    } else {
        response.message = ERROR_MESSAGES.wrongPassword
        return response
    }
}

function addUser(user) {
    const response = { message: '', result: false }

    const emailCheck = checkEmail(user.email)
    const passwordCheck = checkPassword(user.password)
    const usernameCheck = checkUsername(user.username)

    if (emailCheck.valid && passwordCheck.valid && usernameCheck.valid) {
        users.push({ username: user.username, email: user.email, password: user.password })
        response.result = true
        response.message = ERROR_MESSAGES.successAddUser
    } else {
        response.message = emailCheck.message || passwordCheck.message || usernameCheck.message
    }
    return response
}

module.exports = {
    checkUser,
    addUser
};
