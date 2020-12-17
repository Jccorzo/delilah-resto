const users = [];

module.exports.createUser = (user) => {
    const getUser = users.find(userDb => (user.username == userDb.username && user.pass && userDb.pass))
    if (getUser) {
        return { message: 'el usuario ya existe' }
    } else {
        users.push[user]
        return { message: 'usuario creado correctamente' }
    }

}

module.exports.getUser = (user) => {
    console.log(users)
    const getUser = users.find(userDb => (user.username == userDb.username && user.pass && userDb.pass))
    if (getUser) {
        return getUser
    } else {
        return { message: 'El usuario no existe' }
    }
}