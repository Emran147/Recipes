const users = []

function getUsers() {
    return users
}

function addUser(user) {
    users.push(user)
}

module.exports = {
    getUsers,
    addUser
};
